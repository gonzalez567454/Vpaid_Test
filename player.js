document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('my-video');
    var playPauseButton = document.getElementById('play-pause');
    var volumeButton = document.getElementById('volume');
    var volumeSlider = document.getElementById('volume-slider');
    var volumeRange = document.getElementById('volume-range');

    // Toggle play/pause
    playPauseButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    // Toggle volume slider
    volumeButton.addEventListener('click', function() {
        if (volumeSlider.style.display === 'block') {
            volumeSlider.style.display = 'none';
        } else {
            volumeSlider.style.display = 'block';
        }
    });

    // Change volume
    volumeRange.addEventListener('input', function() {
        video.volume = volumeRange.value;
    });

    // Load VAST ad with CORS proxy
    function loadVAST() {
        var rawGitHubURL = 'https://raw.githubusercontent.com/gonzalez567454/Vpaid_Test/main/vpaid_1.xml';
        var corsProxy = 'https://cors-anywhere.herokuapp.com/';
        var vastURL = corsProxy + rawGitHubURL;
        
        fetch(vastURL)
            .then(response => response.text())
            .then(data => {
                // Example: Parse VAST and set up ad
                // For simplicity, we're not parsing VAST here
                console.log('VAST data:', data);
            })
            .catch(error => {
                console.error('Error loading VAST:', error);
            });
    }

    // Load VAST ad when Video.js is ready
    video.addEventListener('loadedmetadata', function() {
        loadVAST();
    });

    // Handle visibility
    function checkVisibility() {
        var rect = video.getBoundingClientRect();
        var isVisible = (rect.top < window.innerHeight && rect.bottom >= 0);
        
        if (isVisible) {
            if (video.paused) {
                video.play();
            }
        } else {
            if (!video.paused) {
                video.pause();
            }
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
});
