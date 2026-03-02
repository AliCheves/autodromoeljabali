import { navigation } from "@/config/navigation";
import { NavbarClient } from "@/components/layout/NavbarClient";

export function Navbar() {
  return <NavbarClient links={navigation} />;
}
