document.addEventListener('DOMContentLoaded', function () {
  const placeholder = document.getElementById('video-placeholder');
  let isMuted = true; // Start muted

  // Create player container
  const container = document.createElement('div');
  container.id = 'player-container';

  // Create video element
  const video = document.createElement('video');
  video.id = 'ad-video';
  video.width = 640;
  video.height = 360;
  video.controls = false; // Custom controls
  video.autoplay = true; // Autoplay the video
  video.muted = isMuted; // Start muted
  container.appendChild(video);

  // Create controls container
  const controls = document.createElement('div');
  controls.id = 'player-controls';
  container.appendChild(controls);

  // Create play/pause button
  const playPauseBtn = document.createElement('button');
  playPauseBtn.id = 'play-pause';
  playPauseBtn.innerHTML = '<i class="fa fa-play"></i>'; // Play icon
  controls.appendChild(playPauseBtn);

  // Create volume control container
  const volumeControl = document.createElement('div');
  volumeControl.id = 'volume-control';

  // Create volume icon button
  const volumeIcon = document.createElement('button');
  volumeIcon.id = 'volume-icon';
  volumeIcon.innerHTML = '<i class="fa fa-volume-up"></i>'; // Volume icon
  volumeControl.appendChild(volumeIcon);

  // Create volume slider
  const volumeSlider = document.createElement('div');
  volumeSlider.id = 'volume-slider';
  const volumeInput = document.createElement('input');
  volumeInput.id = 'volume-level';
  volumeInput.type = 'range';
  volumeInput.min = '0';
  volumeInput.max = '100';
  volumeInput.value = '100';
  volumeSlider.appendChild(volumeInput);
  volumeControl.appendChild(volumeSlider);
  container.appendChild(volumeControl);

  // Append the container to the placeholder
  placeholder.appendChild(container);

  // Create and append the close button outside the player
  const closeBtn = document.createElement('button');
  closeBtn.id = 'close';
  closeBtn.innerHTML = '<i class="fa fa-times"></i>'; // Close icon
  document.body.appendChild(closeBtn);

  // Load VAST ad
  function loadVastAd() {
    const vastUrl = 'https://gonzalez567454.github.io/Vpaid_Test/vpaid_1.xml';
    fetch(vastUrl)
      .then(response => response.text())
      .then(vastXml => {
        // Load the VAST ad into the video player
        video.src = 'path-to-your-video-file.mp4'; // Replace with actual video file path or URL
      })
      .catch(error => console.error('Error loading VAST ad:', error));
  }

  loadVastAd();

  // Toggle play/pause
  playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>'; // Pause icon
    } else {
      video.pause();
      playPauseBtn.innerHTML = '<i class="fa fa-play"></i>'; // Play icon
    }
  });

  // Toggle volume
  volumeIcon.addEventListener('click', () => {
    isMuted = !isMuted;
    video.muted = isMuted;
    volumeIcon.innerHTML = isMuted ? '<i class="fa fa-volume-off"></i>' : '<i class="fa fa-volume-up"></i>';
  });

  // Adjust volume
  volumeInput.addEventListener('input', () => {
    video.volume = volumeInput.value / 100;
  });

  // Close button functionality
  closeBtn.addEventListener('click', () => {
    placeholder.style.opacity = 0;
    placeholder.style.transform = 'scale(0)';
  });

  // Reveal video player on scroll
  function revealPlayer() {
    const rect = placeholder.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      placeholder.style.opacity = 1;
      placeholder.style.transform = 'scale(1)';
    }
  }

  window.addEventListener('scroll', revealPlayer);
  revealPlayer(); // Initial check
});
