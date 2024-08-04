document.addEventListener('DOMContentLoaded', function () {
  const playerContainer = document.getElementById('player-container');
  const playButton = document.getElementById('play-button');
  const volumeButton = document.getElementById('volume-button');
  const volumeSlider = document.getElementById('volume-slider');
  const closeButton = document.getElementById('close-button');

  let isPlaying = false;
  let isMuted = false;

  // Function to load VPAID ad
  function loadVPAID() {
    const adUrl = 'https://gonzalez567454.github.io/Vpaid_Test/vpaid_1.xml';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', adUrl, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Handle VPAID XML response here
        console.log('VPAID ad loaded');
      }
    };
    xhr.send();
  }

  // Initialize VPAID ad
  loadVPAID();

  // Play/Pause button
  playButton.addEventListener('click', function () {
    isPlaying = !isPlaying;
    playButton.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    // Handle play/pause functionality
  });

  // Volume button
  volumeButton.addEventListener('click', function () {
    isMuted = !isMuted;
    volumeButton.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    volumeSlider.style.display = isMuted ? 'none' : 'block';
    // Handle mute/unmute functionality
  });

  // Close button
  closeButton.addEventListener('click', function () {
    playerContainer.style.display = 'none';
  });

  // Show volume slider on hover
  volumeButton.addEventListener('mouseover', function () {
    volumeSlider.style.display = 'block';
  });
  volumeSlider.addEventListener('mouseover', function () {
    volumeSlider.style.display = 'block';
  });
  volumeSlider.addEventListener('mouseout', function () {
    volumeSlider.style.display = 'none';
  });
  volumeButton.addEventListener('mouseout', function () {
    volumeSlider.style.display = 'none';
  });
});
