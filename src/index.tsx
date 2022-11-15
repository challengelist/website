/* @refresh reload */
import { Route, Router, Routes } from "@solidjs/router";
import { render } from "solid-js/web";
import { lazily } from "solidjs-lazily";
import "./styles/app.scss";
import { Navbar } from "./components/Navbar";
import { AccountProvider } from "./contexts/AccountContext";

const { HomePage } = lazily(() => import("./pages/HomePage"));
const { NonExisting } = lazily(() => import("./pages/NonExisting"));

render(() => <AccountProvider>
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" component={HomePage} />
            <Route path="*" component={NonExisting} />
        </Routes>
    </Router>
</AccountProvider>, document.getElementById("root") as HTMLElement);
