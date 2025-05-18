import { Home, Calendar, Users } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "src/frontend/components/ui/navigation-menu";
import logo from "@/frontend/assets/kyrios_logo_text.png";

export function SiteNav() {
  return (
    <div className={"flex items-center justify-center gap-3"}>  <img
      src={logo}
      alt="Kyrios Logo"
      className={"h-20 mt-4 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"}
    />
      <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/events"
              className={navigationMenuTriggerStyle()}
            >
              Events
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/members"
              className={navigationMenuTriggerStyle()}
            >
              Members
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu></div>
  );
}
