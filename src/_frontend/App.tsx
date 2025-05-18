import "./index.css";
import logo from "./assets/kyrios_logo_text.png";

export function App() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={logo}
          alt="Kyrios Logo"
          className=" transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
        />
      </div>
    </div>
  );
}

export default App;
