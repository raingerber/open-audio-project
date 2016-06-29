function IncrementButton(buttonID, increment, audioPlayer) {
  this.buttonID = buttonID;
  this.increment = increment;
  this.audioPlayer = audioPlayer;
  this.button = document.getElementById(buttonID);
  if (!this.button) {
    return;
  }

  this.button.addEventListener('click', this.jump.bind(this));

  // this.button.addEventListener('mousedown', this.onMouseDown.bind(this));
  // document.addEventListener('mouseup', this.onMouseUp.bind(this));
  //
  // this.eventTimeStamp = null;
  // this.intervalID = null;
}

var bookmarks = [
  220.3805896,
  224.0377324,
  227.5671655,
  231.7235374,
  233.6275737,
  236.3907483,
  242.4163265,
  246.294059,
  250.6361905,
  253.956644,
  256.9868481,
  270.1641723,
  277.002449,
  286.0930612,
  292.7687982,
  298.3648073,
  304.6690249,
  307.7456689
];

IncrementButton.prototype.jump = function jump(event) {
  var index = null;
  var time = this.audioPlayer.audio.getCurrentTime();
  var forward = (this.increment > 0);
  console.log('time: ' + time);

  for (var i = 0; i < bookmarks.length - 1; i++) {
    if (forward ? time < bookmarks[i] : time > bookmarks[i]) {
      index = i;
      break;
    }
  }

  if (index !== null) {
    var newTime = bookmarks[index] / this.audioPlayer.audio.getDuration();;
    console.log('jumping to index: ' + index + ', time: ' + newTime);
    this.audioPlayer.audio.seekTo(newTime);
  }

};


// IncrementButton.prototype.onMouseDown = function onMouseDown(event) {
//   this.eventTimeStamp = event.timeStamp;
//   window.setTimeout((function() {
//     window.clearInterval(this.intervalID);
//     this.intervalID = window.setInterval(this.buttonIsPressed.bind(this), 750);
//   }).bind(this), 500);
// };
//
// IncrementButton.prototype.onMouseUp = function onMouseUp(event) {
//   window.clearInterval(this.intervalID);
//   if (this.eventTimeStamp === null) {
//     return;
//   }
//
//   if (typeof this.eventTimeStamp !== 'number' || event.timeStamp - this.eventTimeStamp < 1250) {
//     console.log('increment');
//     this.incrementTime(this.increment);
//   }
//
//   this.eventTimeStamp = null;
// };
//
// IncrementButton.prototype.buttonIsPressed = function buttonIsPressed(event) {
//   console.log('buttonIsPressed');
// };
//
// IncrementButton.prototype.incrementTime = function incrementTime(increment) {
//   if (increment < 0) {
//     this.audioPlayer.audio.skipBackward(increment * -1);
//   } else if (increment > 0) {
//     this.audioPlayer.audio.skipForward(increment);
//   }
// };
