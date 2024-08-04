document.addEventListener('DOMContentLoaded', function() {
    // Initialize Video.js
    var player = videojs('my-video');

    // Function to load VAST ad
    function loadVAST() {
        var vastURL = 'https://gonzalez567454.github.io/Vpaid_Test/vpaid_1.xml'; // Full URL to your VAST XML
        var adsOptions = {
            url: vastURL
        };

        player.ads(); // Initialize ads plugin

        // Load VAST ad
        player.ima(adsOptions); // Ensure 'ima' is the correct method for your VAST plugin
    }

    // Load VAST ad when Video.js is ready
    player.ready(function() {
        loadVAST();
    });
});
