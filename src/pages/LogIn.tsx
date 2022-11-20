import { PasswordField } from "../components/fields/PasswordField";
import { TextField } from "../components/fields/TextField";
import "../styles/pages/authenticate.scss";

export function LogIn() {
    return <div class="authenticate">
        <div class="authenticate--content">
            <div class="authenticate--content-title">
                <div class="authenticate--content-title-title">SIGN IN</div>
                <div class="authenticate--content-title-description">Sign in Description</div>
            </div>
            <TextField id="username" name="Username" lightness={10} />
            <PasswordField id="password" name="Password" lightness={10} />
            <div class="authenticate--content-bottom">
                <a href="#">Forgot password?</a>
                <button>Sign In</button>
            </div>
        </div>
    </div>;
}