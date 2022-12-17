import { createSignal } from "solid-js";
import { TextField } from "../components/fields/TextField";
import "../styles/pages/authenticate.scss";
import { useAccount } from "../contexts/AccountContext";
import { APIAccount } from "../structures/APIAccount";
import { APIResponseError } from "../util/errors/APIResponseError";

export function LogIn() {
    const [username, setUsername] = createSignal("");
    const [password, setPassword] = createSignal("");

    function authenticate() {
        let account = useAccount();
        console.log(account);

        account.client.request("/api/auth/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                "username": username(),
                "password": password()
            })
        }).then(res => {
            account.apiAccount = res.data.account as APIAccount;
            account.loggedIn = true;
            account.token = res.data.token;
        }).catch(err => {
            let apiResponse = err as APIResponseError;
            console.error(apiResponse.message);
        });
    }

    return <div class="authenticate">
        <div class="authenticate--content">
            <div class="authenticate--content-title">
                <div class="authenticate--content-title-title">SIGN IN</div>
                <div class="authenticate--content-title-description">Sign in Description</div>
            </div>
            <TextField onInput={(e) => { setUsername(e.currentTarget.value); }} type={"text"} name="Username" lightness={10} />
            <TextField onInput={(e) => { setPassword(e.currentTarget.value); }} type={"password"} name="Password" lightness={10} />
            <div class="authenticate--content-bottom">
                <a href="#">Forgot password?</a>
                {/* TODO: Convert this button into its own component so that we can add states (loading, disabled, etc) */}
                <button onClick={authenticate}>Sign In</button>
            </div>
        </div>
    </div>;
}