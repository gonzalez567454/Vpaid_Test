// player.js
document.addEventListener('DOMContentLoaded', function () {
    const player = videojs('my-video', {
        controls: true,
        autoplay: true,
        preload: 'auto',
        width: 640,
        height: 360
    });

    // Add VAST support
    player.vastClient({
        adTagUrl: 'https://gonzalez567454.github.io/Vpaid_Test/vpaid_1.xml',
        // additional VAST configuration
    });

    // Event listeners for player controls
    player.on('play', function () {
        console.log('Video is playing');
    });

    player.on('pause', function () {
        console.log('Video is paused');
    });

    player.on('ended', function () {
        console.log('Video has ended');
    });
});
