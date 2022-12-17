import { createSignal } from "solid-js";
import { PasswordField } from "../components/fields/PasswordField";
import { TextField } from "../components/fields/TextField";
import "../styles/pages/authenticate.scss";

export function LogIn() {
    const [username, setUsername] = createSignal("");
    const [password, setPassword] = createSignal("");

    function authenticate() {
        console.log(username());
        console.log(password());
    }

    return <div class="authenticate">
        <div class="authenticate--content">
            <div class="authenticate--content-title">
                <div class="authenticate--content-title-title">SIGN IN</div>
                <div class="authenticate--content-title-description">Sign in Description</div>
            </div>
            <TextField onInput={(e) => { setUsername(e.currentTarget.value); }} name="Username" lightness={10} />
            <PasswordField onInput={(e) => { setPassword(e.currentTarget.value); }} name="Password" lightness={10} />
            <div class="authenticate--content-bottom">
                <a href="#">Forgot password?</a>
                <button onClick={authenticate}>Sign In</button>
            </div>
        </div>
    </div>;
}