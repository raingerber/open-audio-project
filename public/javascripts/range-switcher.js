function updateTime(time) {
  // console.log(time);
  ranges.forEach(function(range) {
    if (time < range.start || range.end < time) {
      range.el.hide(300);
      // range.el.style.display = 'none';
    } else {
      range.el.show(300);
      // range.el.style.display = 'block';
    }
  });
}

var ranges = [
  {
    el: null,
    start: 223,
    end: 231
  },
  {
    el: null,
    start: 232,
    end: 240
  },
  {
    el: null,
    start: 233,
    end: 240
  },
  {
    el: null,
    start: 242,
    end: 245
  },
  {
    el: null,
    start: 243,
    end: 247
  },
  {
    el: null,
    start: 246,
    end: 256
  },
  {
    el: null,
    start: 265,
    end: 278
  },
  {
    el: null,
    start: 279,
    end: 294
  }
];

ranges.forEach(function(range, index) {
  var el = document.getElementById(index + 1 + '');
  el.style.display = 'none';
  range.el = $(el);
});

// console.log(ranges);
