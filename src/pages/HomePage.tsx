import anime from "animejs";
import { createEffect, createSignal } from "solid-js";
import "../styles/pages/home.scss";
import { Util } from "../util/Util";

export function HomePage() {
    return <div class="home">
        <div class="home--video">
            <VideoBackground />
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

function VideoBackground() {
    let [ videoUrls, setVideoUrls ] = createSignal<string[]>([]);
    let videoRef: HTMLVideoElement | undefined = undefined;

    // Grab all the video elements from the API.
    fetch(`${import.meta.env.CL_API_URL}/videos`)
        .then(response => response.json())
        .then(res => {
            // Set the video urls.
            setVideoUrls((res.data as string[]).map(url => `${import.meta.env.CL_API_URL}${url}`));

            createEffect(() => {
                if (videoUrls().length === 0) {
                    return;
                }

                if (videoRef) {
                    let playVideo = () => {
                        // Fade in the video.
                        anime({
                            targets: videoRef,
                            opacity: [0, 0.3],
                            duration: 1000,
                            easing: "easeInOutQuad"
                        });

                        console.log("PLAY");
                        // Calculate the total length of the video.
                        let totalLength = videoRef?.duration;

                        console.log(videoRef?.duration);

                        setTimeout(() => {
                            // Fade out the video.
                            anime({
                                targets: videoRef,
                                opacity: 0,
                                duration: 1000,
                                easing: "easeInOutQuad",
                                complete: () => {
                                    // Stop the video.
                                    videoRef?.pause();

                                    // Set the new video source to a random video.
                                    videoRef!.src = videoUrls()[Util.getRandomInt(0, videoUrls().length - 1)];
                                }
                            });
                        }, ((totalLength ?? 0) * 1000) - 2500);
                    };

                    videoRef.addEventListener("play", () => {
                        playVideo();
                    });

                    // also play here on page refresh.
                    playVideo();
                }
            });
        });

    return <video ref={videoRef} src="/src/assets/videos/funny.mp4" autoplay={true} loop={true} muted={true} />;
}