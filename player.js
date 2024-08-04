// player.js
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Video.js player
    const player = videojs('my-video', {
        controls: true,
        autoplay: false,
        preload: 'auto',
        width: 640,
        height: 360,
        fluid: true
    });

    // Initialize the VAST Client plugin
    player.vastClient({
        adTagUrl: 'https://gonzalez567454.github.io/Vpaid_Test/vpaid_1.xml',
        // Enable ad support
        debug: true,
        timeout: 5000,
        // Optional additional configurations
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
