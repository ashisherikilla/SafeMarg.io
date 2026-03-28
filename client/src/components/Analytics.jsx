import {

  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer

} from "recharts"



function Analytics({ accidents = [] }) {



  /* compute counts safely */

  const highCount = accidents.filter(

    a => a.severity === "High"

  ).length



  const mediumCount = accidents.filter(

    a => a.severity === "Medium"

  ).length



  const lowCount = accidents.filter(

    a => a.severity === "Low"

  ).length



  const data = [

    { name: "High", value: highCount },

    { name: "Medium", value: mediumCount },

    { name: "Low", value: lowCount }

  ]



  const COLORS = [

    "#ef4444",

    "#f97316",

    "#22c55e"

  ]



  const total = accidents.length



  return (

    <div className="

      bg-slate-900/80

      p-4

      rounded-xl

      border border-slate-800

      flex flex-col gap-3

    ">



      {/* title */}

      <div>

        <h3 className="text-sm font-medium text-slate-300">

          Severity Distribution

        </h3>

        <p className="text-xs text-slate-500">

          accident density by impact level

        </p>

      </div>



      {/* chart */}

      <div className="w-full h-44">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>


            <Pie

              data={data}

              dataKey="value"

              outerRadius={70}

              innerRadius={35}

              paddingAngle={3}

            >

              {data.map((entry, index) => (

                <Cell

                  key={index}

                  fill={COLORS[index]}

                />

              ))}

            </Pie>


            <Tooltip

              contentStyle={{

                backgroundColor: "#020617",

                border: "1px solid #1e293b",

                borderRadius: "8px",

                fontSize: "12px"

              }}

            />


          </PieChart>

        </ResponsiveContainer>

      </div>



      {/* stats row */}

      <div className="flex justify-between text-xs text-slate-400 pt-1">


        <span>

          total:

          <span className="ml-1 text-white">

            {total}

          </span>

        </span>



        <span className="text-red-400">

          high: {highCount}

        </span>



        <span className="text-orange-400">

          med: {mediumCount}

        </span>



        <span className="text-green-400">

          low: {lowCount}

        </span>


      </div>



      {/* empty state */}

      {total === 0 && (

        <div className="text-xs text-slate-500 text-center pt-2">

          add accident data to visualize trends

        </div>

      )}



    </div>

  )

}



export default Analytics