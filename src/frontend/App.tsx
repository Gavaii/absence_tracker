import "./index.css";
import { SiteNav } from "./components/blocks/SiteNav";

export function App() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
        <SiteNav></SiteNav>
      <div className="flex justify-center items-center gap-8 mb-8">
       
      </div>
    </div>
  );
}

export default App;
