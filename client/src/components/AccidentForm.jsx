import { useState } from "react"
import API from "../services/api"

function AccidentForm({ latlng, onClose, refreshData }) {

  const [formData, setFormData] = useState({

    severity: "Low",

    description: "",

    city: ""

  })


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    })

  }


  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await API.post("/accidents", {

        location: {

          lat: latlng?.lat,

          lng: latlng?.lng,

          city: formData.city

        },

        severity: formData.severity,

        description: formData.description

      })


      await refreshData()

      onClose()

    }

    catch (error) {

      console.log(error)

    }

  }


  return (

    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-[1000]">

      <div className="bg-slate-900/95 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-slate-700">


        <h2 className="text-lg font-semibold tracking-wide mb-4">

          Report Accident

        </h2>


        <form onSubmit={handleSubmit} className="space-y-4">


          {/* city */}

          <div className="flex flex-col gap-1">

            <label className="text-sm text-slate-400">

              City

            </label>


            <input

              type="text"

              name="city"

              required

              onChange={handleChange}

              placeholder="ex: Hyderabad"

              className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-green-500 transition"

            />

          </div>


          {/* severity */}

          <div className="flex flex-col gap-1">

            <label className="text-sm text-slate-400">

              Severity

            </label>


            <select

              name="severity"

              value={formData.severity}

              onChange={handleChange}

              className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-green-500 transition"

            >

              <option value="Low">Low</option>

              <option value="Medium">Medium</option>

              <option value="High">High</option>

            </select>

          </div>


          {/* description */}

          <div className="flex flex-col gap-1">

            <label className="text-sm text-slate-400">

              Description

            </label>


            <textarea

              name="description"

              rows="3"

              onChange={handleChange}

              placeholder="optional details"

              className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-green-500 transition"

            />

          </div>


          {/* buttons */}

          <div className="flex gap-3 pt-2">


            <button

              type="submit"

              className="flex-1 bg-green-600 hover:bg-green-500 py-2 rounded-lg font-medium transition"

            >

              Submit

            </button>


            <button

              type="button"

              onClick={onClose}

              className="flex-1 bg-slate-700 hover:bg-slate-600 py-2 rounded-lg transition"

            >

              Cancel

            </button>


          </div>


        </form>

      </div>

    </div>

  )

}

export default AccidentForm