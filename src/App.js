import Starfield from "./Starfield";

function App() {
  return (
    <div>
      <Starfield />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <h1 className="text-4xl font-mono drop-shadow-[0_0_20px_#fff]">
          Warp Speed Engaged 🚀
        </h1>
      </div>
    </div>
  );
}

export default App;
