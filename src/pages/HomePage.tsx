import "../styles/pages/home.scss";

export function HomePage() {
    return <div class="home">
        <div class="home--video">
            <video src="/src/assets/videos/funny.mp4" autoplay={true} loop={true} muted={true}></video>
        </div>
        <div class="home--contents">
            <div class="home--contents-hero">
                <div class="home--contents-hero-title">
                    <div class="home--contents-hero-title-welcome">Welcome to</div>
                    <div class="home--contents-hero-title-name">The Challenge List</div>
                </div>
                <div class="home--contents-hero-description">
                    Welcome to the website of the Geometry Dash Challenge List! Here you'll find the list of the hardest challenges that Geometry Dash's player-base has to offer.
                </div>
            </div>
        </div>
    </div>;
}