/* @refresh reload */
import { Route, Router, Routes } from "@solidjs/router";
import { render } from "solid-js/web";
import { lazily } from "solidjs-lazily";
import "./styles/app.scss";
import { Navbar } from "./components/Navbar";
import { AccountProvider } from "./contexts/AccountContext";
import { LandingPage } from "./pages/LandingPage";

const { HomePage } = lazily(() => import("./pages/HomePage"));
const { NonExisting } = lazily(() => import("./pages/NonExisting"));

render(() => {
    // todo: check if the user can access the site.
    return <LandingPage/>;

    return <AccountProvider>
        <div style="z-index: 9999; position: relative;">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" component={HomePage} />
                    <Route path="*" component={NonExisting} />
                </Routes>
            </Router>
        </div>
    </AccountProvider>;
}, document.getElementById("root") as HTMLElement);
