import { useEffect, useState } from "react"

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
  ZoomControl
} from "react-leaflet"

import MarkerClusterGroup from "react-leaflet-cluster"

import L from "leaflet"
import "leaflet.heat"

import API from "../services/api"

import AccidentForm from "./AccidentForm"
import Sidebar from "./Sidebar"
import Loader from "./Loader"

import logoMarker from "../assets/marker.png"



/* custom marker icon */

const customIcon = new L.Icon({

  iconUrl: logoMarker,

  iconSize: [38, 38],

  iconAnchor: [19, 38]

})



/* detect click on map */

function MapClickHandler({ setLatLng }) {

  useMapEvents({

    click(e) {

      setLatLng(e.latlng)

    }

  })

  return null

}



/* fly to selected accident */

function FlyToHandler({ selected }) {

  const map = useMap()

  useEffect(() => {

    if (!selected) return

    map.flyTo(

      [

        selected.location?.lat,

        selected.location?.lng

      ],

      12

    )

  }, [selected, map])



  return null

}



/* heatmap layer */

function HeatmapLayer({ accidents }) {

  const map = useMap()

  useEffect(() => {

    if (!map || accidents.length === 0) return



    const points = accidents

      .filter(a => a.location?.lat && a.location?.lng)

      .map(a => [

        a.location.lat,

        a.location.lng,

        a.severity === "High"

          ? 1

          : a.severity === "Medium"

          ? 0.6

          : 0.3

      ])



    const heatLayer = L.heatLayer(points, {

      radius: 28,

      blur: 22,

      maxZoom: 12,

      gradient: {

        0.2: "#22c55e",

        0.5: "#f97316",

        0.9: "#ef4444"

      }

    })



    heatLayer.addTo(map)



    return () => {

      map.removeLayer(heatLayer)

    }

  }, [accidents, map])



  return null

}



function MapView({ theme }) {

  const [accidents, setAccidents] = useState([])

  const [latlng, setLatLng] = useState(null)

  const [filter, setFilter] = useState("All")

  const [selected, setSelected] = useState(null)

  const [loading, setLoading] = useState(true)



  /* fetch accidents from backend */

  const fetchAccidents = async () => {

    try {

      setLoading(true)



      const res = await API.get("/accidents")



      setAccidents(res.data)

    }

    catch (error) {

      console.log(error)

    }

    finally {

      setLoading(false)

    }

  }



  useEffect(() => {

    fetchAccidents()

  }, [])



  /* apply filter */

  const filteredAccidents =

    filter === "All"

      ? accidents

      : accidents.filter(a => a.severity === filter)



  return (

    <div className="relative flex h-[calc(100vh-80px)]">


      {/* Sidebar */}

      <Sidebar

        accidents={filteredAccidents}

        filter={filter}

        setFilter={setFilter}

        flyToLocation={setSelected}

      />



      {/* Map area */}

      <div className="flex-1 relative">


        {/* Loader overlay */}

        {loading && (

          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center z-[999]">

            <Loader />

          </div>

        )}



        {/* Accident form */}

        {latlng && (

          <AccidentForm

            latlng={latlng}

            refreshData={fetchAccidents}

            onClose={() => setLatLng(null)}

          />

        )}



        <MapContainer

          center={[22.9734, 78.6569]}

          zoom={5}

          zoomControl={false}

          className="h-full w-full"

        >


          <ZoomControl position="topright" />


          <TileLayer

            url={

              theme === "dark"

                ? "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"

                : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            }

          />


          <FlyToHandler selected={selected} />


          <MapClickHandler setLatLng={setLatLng} />


          <HeatmapLayer accidents={filteredAccidents} />


          {/* clustered markers */}

          <MarkerClusterGroup chunkedLoading>


            {filteredAccidents

              .filter(a => a.location?.lat && a.location?.lng)

              .map(a => (

                <Marker

                  key={a._id}

                  position={[

                    a.location.lat,

                    a.location.lng

                  ]}

                  icon={customIcon}

                >

                  <Popup>

                    <div className="space-y-1">

                      <h3 className="font-semibold text-base">

                        {a.location?.city || "Unknown"}

                      </h3>


                      <p className="text-sm">

                        Severity:

                        <span

                          className={`ml-1 font-medium

                          ${

                            a.severity === "High"

                              ? "text-red-400"

                              : a.severity === "Medium"

                              ? "text-orange-400"

                              : "text-green-400"

                          }`}

                        >

                          {a.severity}

                        </span>

                      </p>


                      <p className="text-xs text-slate-400">

                        {a.description || "No description"}

                      </p>

                    </div>

                  </Popup>

                </Marker>

              ))}


          </MarkerClusterGroup>


        </MapContainer>


      </div>


    </div>

  )

}



export default MapView