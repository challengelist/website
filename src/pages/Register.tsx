import { PasswordField } from "../components/fields/PasswordField";
import { TextField } from "../components/fields/TextField";
import "../styles/pages/authenticate.scss";

export function Register() {
    return <div class="authenticate">
        <div class="authenticate--content">
            <div class="authenticate--content-title">
                <div class="authenticate--content-title-title">REGISTER</div>
                <div class="authenticate--content-title-description">Registration Description</div>
            </div>
            <TextField id="username" name="Username" lightness={10} />
            <PasswordField id="password" name="Password" lightness={10} />
            {/* TODO: indicator for correct password */}
            <PasswordField id="confirm-password" name="Confirm Password" lightness={10} />
            <div class="authenticate--content-bottom">
                <a href="/login">Already have an account?</a>
                <button>Register</button>
            </div>
        </div>
    </div>;
}