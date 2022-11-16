import { faChartPie, faFileLines, faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { For, createContext, createSignal, useContext } from "solid-js";
import { useAccount } from "../contexts/AccountContext";
import { Avatar } from "./Avatar";
import { NavbarItem, NavbarItemProperties } from "./navigation/NavbarItem";
import "../styles/components/navbar.scss";

const NavbarPageContext = createContext();

const pages: NavbarItemProperties[] = [
    { name: "Listing", path: "/listing", icon: faRankingStar },
    { name: "Stats", path: "/stats", icon: faChartPie },
    { name: "Guidelines", path: "/guidelines", icon: faFileLines },
];

export function Navbar() {
    const windowPage = `/${window.location.pathname.split("/")[1] ?? ""}`;
    const [navbarPage, setNavbarPage] = createSignal(windowPage);

    const account = useAccount();

    // Reset the current page type.
    // TODO: There has to be a better way of approaching this.
    if (navbarPage() !== windowPage) {
        setNavbarPage(windowPage);
    }

    if (navbarPage() === "/") {
        import("../styles/components/navbar.home.scss");

        setTimeout(() => {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 50) {
                    nav?.classList.add("navbar--home-default");
                } else {
                    nav?.classList.remove("navbar--home-default");
                }
            });
        });
    }

    let nav: HTMLDivElement | undefined;

    return <div ref={nav} class="navbar">
        <div class="navbar--content">
            <NavbarPageContext.Provider value={navbarPage()}>
                <div class="navbar--content-left">
                    <a href="/" class="navbar--content-left-logo">
                        <img src="/src/assets/logo.png" alt="Challenge List"/>
                    </a>
                    <div class="navbar--content-left-buttons">
                        <For each={pages}>{ page => <NavbarItem {...page} /> }</For>
                    </div>
                </div>
                <div class="navbar--content-right">
                    {account.loggedIn ? <div class="navbar--content-right-avatar">
                        <Avatar url="https://alten.s-ul.eu/muXCiSTJ.png" />
                    </div> : <div class="navbar--content-right-authenticate">
                        <a href="/login">Sign In</a>
                        <a href="/register">Register</a>
                    </div>}
                </div>
            </NavbarPageContext.Provider>
        </div>
    </div>;
}

export function useNavbarPageContext() {
    return useContext(NavbarPageContext);
}