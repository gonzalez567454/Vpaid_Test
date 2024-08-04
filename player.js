document.addEventListener('DOMContentLoaded', function() {
    var playerElement = document.getElementById('player-container');
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

    // Function to check visibility
    function checkVisibility() {
        var rect = playerElement.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        
        var heightVisible = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
        var widthVisible = Math.max(0, Math.min(rect.right, windowWidth) - Math.max(rect.left, 0));

        var percentageVisible = (widthVisible * heightVisible) / (playerElement.offsetWidth * playerElement.offsetHeight);

        if (percentageVisible > 0.5) {
            playerElement.style.display = 'block'; // Show player
            if (player.paused()) {
                player.play(); // Resume playing if it's paused
            }
        } else {
            playerElement.style.display = 'none'; // Hide player
            if (!player.paused()) {
                player.pause(); // Pause playing if it's not paused
            }
        }
    }

    // Check visibility on scroll and resize
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial visibility check
    checkVisibility();
});
