import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Fa from "solid-fa";
import { useNavbarPageContext } from "../Navbar";

export interface NavbarItemProperties {
    name: string;
    path: string;
    icon: IconDefinition
}

export function NavbarItem({ name, path, icon }: NavbarItemProperties) {
    const navbarProvider = useNavbarPageContext();
    const isActive = path === navbarProvider;

    return <a href={path} class={`navbar--content-left-buttons-button ${isActive && "navbar--content-left-buttons-button-active"}`}>
        <Fa icon={icon} />
        <p>{name}</p>
    </a>;
}