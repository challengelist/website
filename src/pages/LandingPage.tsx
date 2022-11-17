import "../styles/pages/landing.scss";

export function LandingPage() {


    return <div class="landing">
        <div class="landing--container">
            <div class="landing--title">
                <div class="landing--title-title">PRIVATE BETA</div>
                <div class="landing--title-description">The new Challenge List website is currently not open for the public. If you know your access code, you may enter it in the input box below to access to private beta.</div>
            </div>
            <div class="landing--input">
                <input type="text" class="landing--input-text"/>
                <button class="landing--input-button">Submit</button>
            </div>
            <div class="landing--form">
                If you wish to apply to test the new website, please visit <a href="#">this form</a>.
            </div>
        </div>
    </div>;
}