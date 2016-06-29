var playing = false;

function addPlayerControls(audioPlayer) {

  var playBtn = document.getElementById('play-btn');

  playBtn.addEventListener('click', playPause);

  var backBtn = new IncrementButton('back-btn', -5, audioPlayer);
  var fwdBtn = new IncrementButton('fwd-btn', 5, audioPlayer);

  function playPause() {
    audioPlayer.audio.playPause();
    playing = !playing;
    playBtn.textContent = playing ? 'Pause' : 'Play';
  }

};
