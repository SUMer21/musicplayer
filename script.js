// script.js

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const trackTitle = document.getElementById('track-title');

// List of tracks
const tracks = [
  { title: 'Track 1', src: 'chinna-chinna-asai-ir-1868.mp3' },
  { title: 'Track 2', src: 'instrumental-23808.mp3' },
  { title: 'Track 3', src: 'instrumental-whistle-17264.mp3' }
];

let currentTrackIndex = 0;

// Load the current track
function loadTrack(index) {
  audio.src = tracks[index].src;
  trackTitle.textContent = tracks[index].title;
}

// Play or pause the track
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Play';
  }
}

// Play the previous track
function playPreviousTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrackIndex);
  audio.play();
  playPauseBtn.textContent = 'Pause';
}

// Play the next track
function playNextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
  audio.play();
  playPauseBtn.textContent = 'Pause';
}

// Event listeners
playPauseBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', playPreviousTrack);
nextBtn.addEventListener('click', playNextTrack);

// Initialize the player
loadTrack(currentTrackIndex);
