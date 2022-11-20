import "../styles/components/footer.scss";

export function Footer() {
    // TODO: Make buttons work
    return <div class="footer">
        <div class="footer--content">
            <div class="footer--content-left">
                <div class="footer--content-left-group">
                    <div class="footer--content-left-group-bold">Copyright © 2021 GD Challenge List - All Rights Reserved</div>
                    <div class="footer--content-left-group-text">The Challenge List is in no way affiliated with RobTopGames AB®</div>
                </div>
                <div class="footer--content-left-group">
                    <div class="footer--content-left-group-bold">Terms of Use</div>
                    <div class="footer--content-left-group-text">All content on this website is provided free of charge. However, you may not redistribute, in any way, any original content found here without the creator's explicit permission. All content is provided without any guarantees.</div>
                </div>
            </div>
            <div class="footer--content-right">
                <div class="footer--content-right-buttons">
                    <div class="footer--content-right-buttons-group">
                        <button class="footer--content-right-buttons-group-button">Back to Top</button>
                    </div>
                    <div class="footer--content-right-buttons-group">
                        <button class="footer--content-right-buttons-group-button">Hardest Challenge</button>
                        <button class="footer--content-right-buttons-group-button">Legacy List</button>
                    </div>
                </div>
                <div class="footer--content-right-twitter">Something wrong? <a href="#">Tweet us!</a></div>
            </div>
        </div>
    </div>;
}