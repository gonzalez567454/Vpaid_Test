document.addEventListener("DOMContentLoaded", () => {
  const videoPlaceholder = document.getElementById('video-placeholder');
  const playerContainer = document.getElementById('player-container');
  const playButton = document.getElementById('play-button');
  const volumeButton = document.getElementById('volume-button');
  const volumeSlider = document.getElementById('volume-slider');
  const closeButton = document.getElementById('close-button');

  let video = document.createElement('video');
  video.setAttribute('width', '640');
  video.setAttribute('height', '360');
  video.setAttribute('controls', 'true');
  video.setAttribute('autoplay', 'true');
  video.setAttribute('muted', 'true');

  // Create player
  const source = document.createElement('source');
  source.setAttribute('src', 'https://gonzalez567454.github.io/Vpaid_Test/vpaid_1.xml');
  source.setAttribute('type', 'application/xml');
  video.appendChild(source);
  videoPlaceholder.appendChild(video);

  // Play/Pause button functionality
  playButton.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      video.pause();
      playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
  });

  // Volume button functionality
  volumeButton.addEventListener('click', () => {
    volumeSlider.style.display = (volumeSlider.style.display === 'none' || !volumeSlider.style.display) ? 'block' : 'none';
  });

  volumeSlider.addEventListener('input', (e) => {
    video.volume = e.target.value / 100;
  });

  // Close button functionality
  closeButton.addEventListener('click', () => {
    playerContainer.style.display = 'none';
  });

  // Ensure the volume slider and close button are positioned correctly
  volumeButton.style.position = 'absolute';
  volumeButton.style.bottom = '10px';
  volumeButton.style.right = '10px';

  closeButton.style.position = 'absolute';
  closeButton.style.top = '-20px';
  closeButton.style.right = '10px';

  // Scroll behavior for player visibility
  window.addEventListener('scroll', () => {
    const rect = playerContainer.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      playerContainer.style.display = 'block';
    } else {
      playerContainer.style.display = 'none';
    }
  });
});
