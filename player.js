document.addEventListener('DOMContentLoaded', function() {
    // Initialize Video.js
    var player = videojs('my-video');

    // Function to load VAST ad
    function loadVAST() {
        var vastURL = 'vpaid_1.xml'; // URL to your VAST XML
        var adsOptions = {
            url: vastURL
        };

        player.ads(); // Initialize ads plugin

        // Load VAST ad
        player.ima(adsOptions);
    }

    // Load VAST ad when Video.js is ready
    player.ready(function() {
        loadVAST();
    });
});
