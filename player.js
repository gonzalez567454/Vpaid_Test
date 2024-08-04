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
  playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';  // Play icon
  controls.appendChild(playPauseBtn);

  // Create volume control container
  const volumeControl = document.createElement('div');
  volumeControl.id = 'volume-control';

  // Create volume icon button
  const volumeIcon = document.createElement('button');
  volumeIcon.id = 'volume-icon';
  volumeIcon.innerHTML = '<i class="fa fa-volume-up"></i>';  // Volume icon
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
  controls.appendChild(volumeControl);

  // Append the container to the video-container section
  document.querySelector('.video-container').appendChild(container);

  // Create and append the close button outside the player
  const closeBtn = document.createElement('button');
  closeBtn.id = 'close';
  closeBtn.innerHTML = '<i class="fa fa-times"></i>';  // Close icon
  document.body.appendChild(closeBtn);

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
      playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';  // Pause icon
    } else {
      video.pause();
      playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';  // Play icon
    }
  });

  // Volume icon and slider functionality
  volumeIcon.addEventListener('click', function () {
    if (isMuted) {
      video.muted = false;
      volumeIcon.innerHTML = '<i class="fa fa-volume-up"></i>';  // Volume icon
    } else {
      video.muted = true;
      volumeIcon.innerHTML = '<i class="fa fa-volume-off"></i>';  // Mute icon
    }
    isMuted = !isMuted;
  });

  volumeInput.addEventListener('input', function () {
    video.volume = volumeInput.value / 100;
  });

  // Close button functionality
  closeBtn.addEventListener('click', function () {
    container.style.display = 'none';
    closeBtn.style.display = 'none'; // Hide close button when player is closed
  });

  // Load VAST ad on page load
  loadVastAd();
});
