import { useState } from "react";
import MapView from "./components/MapView";
import image from "./assets/SafeMarg_Logo_svg.png";


function App() {

  return (

    <div className="min-h-screen bg-slate-950 text-white">


      {/* header */}

      <header className="

        flex flex-col md:flex-row

        items-center

        justify-between

        gap-3

        px-6 py-4

        border-b border-slate-200

       

      ">


        {/* title */}

        <div>

          <h1 className="text-2xl font-bold tracking-wide">

            <span className="text-orange-500">

              Safe

            </span>

            <span className="text-green-600">

              Marg.io

            </span>

          </h1>


          <p className="text-sm text-slate-500">

            Accident Hotspot Mapper

          </p>

        </div>


        {/* logo */}

        <img

          src={logo}

          alt="SafeMarg Logo"

          className="h-14 object-contain"

        />


      </header>


      {/* map */}

      <MapView theme="light" />


    </div>

  )

}

export default App
