document.addEventListener('DOMContentLoaded', function () {
  // Create player container
  const container = document.createElement('div');
  container.id = 'player-container';

  // Create video element
  const video = document.createElement('video');
  video.id = 'ad-video';
  video.width = 640;
  video.height = 360;
  video.controls = false;  // Custom controls
  container.appendChild(video);

  // Create controls container
  const controls = document.createElement('div');
  controls.id = 'player-controls';
  container.appendChild(controls);

  // Create play/pause button
  const playPauseBtn = document.createElement('button');
  playPauseBtn.id = 'play-pause';
  playPauseBtn.textContent = 'Play';
  controls.appendChild(playPauseBtn);

  // Create volume toggle button
  const volumeToggleBtn = document.createElement('button');
  volumeToggleBtn.id = 'volume-toggle';
  volumeToggleBtn.textContent = 'Mute';
  controls.appendChild(volumeToggleBtn);

  // Create close button
  const closeBtn = document.createElement('button');
  closeBtn.id = 'close';
  closeBtn.textContent = 'Close';
  controls.appendChild(closeBtn);

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
  controls.appendChild(volumeSlider);

  // Append the container to the video-container section
  document.querySelector('.video-container').appendChild(container);

  let isMuted = false;

  // Load VAST ad
  function loadVastAd() {
    const vastUrl = 'https://gonzalez567454.github.io/Vpaid_Test/vpaid_1.xml';
    fetch(vastUrl)
      .then(response => response.text())
      .then(vastXml => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(vastXml, 'application/xml');
        const mediaFile = xmlDoc.querySelector('MediaFile');
        const mediaUrl = mediaFile ? mediaFile.textContent : '';
        video.src = mediaUrl;
      })
      .catch(error => console.error('Error loading VAST ad:', error));
  }

  // Play/Pause button functionality
  playPauseBtn.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      playPauseBtn.textContent = 'Pause';
    } else {
      video.pause();
      playPauseBtn.textContent = 'Play';
    }
  });

  // Volume toggle button functionality
  volumeToggleBtn.addEventListener('click', function () {
    if (isMuted) {
      video.muted = false;
      volumeToggleBtn.textContent = 'Mute';
    } else {
      video.muted = true;
      volumeToggleBtn.textContent = 'Unmute';
    }
    isMuted = !isMuted;
  });

  // Volume slider functionality
  volumeInput.addEventListener('input', function () {
    video.volume = volumeInput.value / 100;
  });

  // Close button functionality
  closeBtn.addEventListener('click', function () {
    container.style.display = 'none';
  });

  // Load VAST ad on page load
  loadVastAd();
});
