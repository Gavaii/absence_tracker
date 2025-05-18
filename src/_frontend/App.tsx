import "./index.css";
import logo from "./assets/kyrios_logo_text.png";
// import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./components/ui/navigation-menu";

export function App() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
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
