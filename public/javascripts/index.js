function AudioPlayer(selector, filePath) {
  this.selector = selector || '';
  this.filePath = filePath || '';
  this.audio = null;
}

AudioPlayer.prototype.create = function create() {
  this.audio = WaveSurfer.create({
    container: this.selector
  });

  this.audio.on('ready', this.onReady.bind(this));
  this.audio.load(this.filePath);
};

AudioPlayer.prototype.onReady = function onReady() {
  addPlayerControls(player);

  var loader = document.getElementById('waveform-loader-animation');

  if (loader) {
    loader.style.display = 'none';
  }

  var buttonPanel;

  if (buttonPanel = document.querySelector('.button-panel')) {
    buttonPanel.style.display = 'block';
  }

  var startTime = 215;

  this.audio.skipForward(startTime);
  updateTimeDisplay(startTime);

  this.audio.on('audioprocess', function(time) {
    if (time < 1) {
      return;
    }

    updateTimeDisplay(time);
    updateTime(time);
  });

  this.audio.on('scroll', function() {
    console.log(arguments);
  });

  // this.audio.play();
};

var timeDisplay;

function setTimeDisplayElement() {
  return timeDisplay = document.getElementById('current-time');
  // timeDisplay.addEventListener('click', function() {
  //
  // });
}

function updateTimeDisplay(time) {
  timeDisplay = timeDisplay || setTimeDisplayElement();
  if (!timeDisplay) {
    return;
  }

  var timeStr = Math.round(time / 60) + 'm' + Math.round(time % 60) + 's';

  var height = timeDisplay.parentElement.clientHeight + 'px';

  timeDisplay.style.fontSize = height;
  timeDisplay.style.lineHeight = height;
  timeDisplay.textContent = timeStr;
}

var player = new AudioPlayer('#waveform', 'audio/circle_of_fifths_final.mp3');

player.create();
