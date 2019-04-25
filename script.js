console.clear();
Array.from(
    document.querySelectorAll('.video-tile'),
    function (el) {
        const video = el.querySelector('video');

        el.addEventListener('mouseenter', () => {
            video.play()
        });

        el.addEventListener('mouseleave', () => {
            video.pause();
            setTimeout(() => {
                video.currentTime = 0
            }, 400);
        });
    });

const elVideoToggle = document.querySelector('.video-toggle');
const buttonbar = document.querySelector('.button');
const videoPlayer = document.getElementById('video__player');
const videoPause = document.getElementById('video__pause');
const videoPlay = document.getElementById('video__play');

const videoTrack = document.getElementById('video__track')
const videoSound = document.getElementById('video__sound');
const soundTrack = document.getElementById('sound__track');

elVideoToggle.addEventListener('click', e => {
    elVideoToggle.classList.toggle('active');
    buttonbar.classList.toggle('active');
    const condition = elVideoToggle.matches('.active');
    // elVideoToggle.querySelector('video')[condition ? 'play' : 'pause']();
    if (condition) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
    console.log("active");
});


// videoPlay.addEventListener('click', function () {
//     videoPlayer.play();
//     console.log("play");
// });
// videoPause.addEventListener('click', function () {
//     videoPlayer.pause();
//     console.log("pause");
// });

videoTrack.addEventListener('change', function () {
    videoPlayer.currentTime = this.value;
});

videoPlayer.addEventListener('timeupdate', function () {
    videoTrack.value = videoPlayer.currentTime;
});


updateVolume = function () {
    videoPlayer.volume = soundTrack.value / 10;
    console.log(videoPlayer.volume);
};

soundTrack.addEventListener("mousedown", function () {
    updateVolume();
    soundTrack.addEventListener("mousemove", updateVolume);
});
soundTrack.addEventListener("mouseup", function () {
    soundTrack.removeEventListener("mousemove", updateVolume);
});