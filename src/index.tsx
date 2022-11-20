/* @refresh reload */
import { Route, Router, Routes } from "@solidjs/router";
import { render } from "solid-js/web";
import { lazily } from "solidjs-lazily";
import "./styles/app.scss";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { AccountProvider } from "./contexts/AccountContext";
import { LandingPage } from "./pages/LandingPage";

const { HomePage } = lazily(() => import("./pages/HomePage"));
const { LogIn } = lazily(() => import("./pages/LogIn"));
const { Register } = lazily(() => import("./pages/Register"));
const { NonExisting } = lazily(() => import("./pages/NonExisting"));

render(() => {
    // todo: check if the user can access the site.
    //return <LandingPage/>;

    return <AccountProvider>
        <div style="z-index: 9999; position: relative;">
            <Router>
                <Navbar/>
                <div class="app">
                    <Routes>
                        <Route path="/" component={HomePage} />
                        <Route path="/login" component={LogIn} />
                        <Route path="/register" component={Register} />
                        <Route path="*" component={NonExisting} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    </AccountProvider>;
}, document.getElementById("root") as HTMLElement);
