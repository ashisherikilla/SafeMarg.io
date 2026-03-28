import { useState } from "react";
import MapView from "./components/MapView";
import image from "./assets/Safemarg_Logo_svg.png";

function App() {
  const [theme, setTheme] = useState("Day");

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="flex justify-between items-center px-6 py-3 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-orange-500">Safe</span>

            <span className="text-green-500">Marg.io</span>
          </h1>

          <p className="text-sm text-slate-400">Accident Hotspot Mapper</p>
        </div>

        <img src={image} alt="SafeMarg Logo" className="w-auto h-22 mx-auto" />

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
        >
          {theme === "dark" ? "Day" : "Night"}
        </button>
      </header>

      <MapView theme={theme} />
    </div>
  );
}

export default App;
