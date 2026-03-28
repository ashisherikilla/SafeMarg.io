import Analytics from "./Analytics"



function Sidebar({

  accidents,

  setFilter,

  filter,

  flyToLocation

}) {

  return (

    <div className="

      absolute md:relative

      top-0 left-0

      h-full

      w-full md:w-80 lg:w-96

      bg-slate-900/95 backdrop-blur-xl

      border-r border-slate-800

      p-4 md:p-5

      overflow-y-auto

      z-[999]

      flex flex-col

      gap-5

    ">


      {/* title */}

      <div>

        <h2 className="text-lg font-semibold tracking-wide">

          Accident Insights

        </h2>

        <p className="text-xs text-slate-400 mt-1">

          visualize and analyze risk zones

        </p>

      </div>



      {/* analytics */}

      <Analytics accidents={accidents} />



      {/* filter */}

      <div className="flex flex-col gap-1">

        <label className="text-sm text-slate-400">

          Filter by Severity

        </label>


        <select

          value={filter}

          onChange={(e) => setFilter(e.target.value)}

          className="

            w-full

            px-3 py-2

            rounded-lg

            bg-slate-800

            border border-slate-700

            focus:outline-none

            focus:ring-1 focus:ring-green-500

            transition

          "

        >

          <option value="All">

            All

          </option>


          <option value="High">

            High

          </option>


          <option value="Medium">

            Medium

          </option>


          <option value="Low">

            Low

          </option>

        </select>

      </div>



      {/* accident list */}

      <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-1">


        {accidents.length === 0 && (

          <div className="text-sm text-slate-500 text-center mt-6">

            no accident records yet

          </div>

        )}



        {accidents.map((a) => (

          <div

            key={a._id}

            onClick={() => flyToLocation(a)}

            className="

              p-3

              rounded-xl

              bg-slate-800/80

              hover:bg-slate-700

              transition

              cursor-pointer

              border border-slate-700

              space-y-1

            "

          >


            {/* severity */}

            <div

              className={`

                text-sm font-semibold tracking-wide

                ${

                  a.severity === "High"

                    ? "text-red-400"

                    : a.severity === "Medium"

                    ? "text-orange-400"

                    : "text-green-400"

                }

              `}

            >

              {a.severity}

            </div>



            {/* city */}

            <div className="text-sm text-slate-200">

              {a.location?.city || "Unknown city"}

            </div>



            {/* description */}

            <div className="text-xs text-slate-500 line-clamp-2">

              {a.description || "No description"}

            </div>


          </div>

        ))}


      </div>


    </div>

  )

}



export default Sidebar