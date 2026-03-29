import MapView from "./components/MapView";
import image from "./assets/SafeMarg_Logo_svg.png";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="flex justify-between items-center px-6 py-3 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-orange-500">Safe</span>

            <span className="text-green-500">Marg.io</span>
          </h1>

          <p className="text-sm text-slate-400">
            Accident Hotspot Mapper
          </p>
        </div>

        <img
          src={image}
          alt="SafeMarg Logo"
          className="h-12"
        />
      </header>

      <MapView theme="light" />
    </div>
  );
}

export default App;
