var RENDERER = {
  REGION: 250,
  CELL_SIZE: 20,
  NEIGHBORS: [
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 }
  ],
  VELOCITY_RATE: 0.05,
  DELTA_RATE: 0.5,

  init: function () {
    this.setParameters();
    this.createElements();
    this.reconstructMethods();
    this.bindEvent();
    this.render();
  },

  setParameters: function () {
    this.$window = $(window);
    this.$container = $('#jsi-fluid-container');
    this.width = this.$container.width();
    this.height = this.$container.height();
    this.context = $('<canvas />')
      .attr({ width: this.width, height: this.height })
      .appendTo(this.$container)
      .get(0)
      .getContext('2d');
    this.cells = [];
    this.points = [];
    this.axis = null;
    this.velocityRate = this.VELOCITY_RATE * 3;
  },

  createElements: function () {
    var columnCount = this.columnCount = Math.ceil(this.width / this.CELL_SIZE);
    var rowCount = this.rowCount = Math.ceil(this.height / this.CELL_SIZE);
    var baseSize = this.CELL_SIZE * this.CELL_SIZE;

    for (var y = 0; y <= rowCount; y++) {
      for (var x = 0; x <= columnCount; x++) {
        this.points[this.getPointIndex(x, y)] = new POINT(x * this.CELL_SIZE, y * this.CELL_SIZE);
      }
    }

    for (var y = 0; y < rowCount; y++) {
      for (var x = 0; x < columnCount; x++) {
        var index = x + y * columnCount;
        this.cells[index] = new CELL(baseSize, [
          this.points[this.getPointIndex(x, y)],
          this.points[this.getPointIndex(x + 1, y)],
          this.points[this.getPointIndex(x + 1, y + 1)],
          this.points[this.getPointIndex(x, y + 1)]
        ]);
      }
    }
  },

  getPointIndex: function (x, y) {
    return x + y * (this.columnCount + 1);
  },

  forceOn: function (event) {
    var offset = this.$container.offset();
    this.axis = {
      x: event.clientX - offset.left + this.$window.scrollLeft(),
      y: event.clientY - offset.top + this.$window.scrollTop()
    };
  },

  forceOff: function () {
    this.axis = null;
  },

  reconstructMethods: function () {
    this.render = this.render.bind(this);
  },

  bindEvent: function () {
    this.$container.on('mousemove', this.forceOn.bind(this));
    this.$container.on('mouseleave', this.forceOff.bind(this));
  },

  propagateForce: function () {
    var cellSize = this.CELL_SIZE;
    var columnCount = this.columnCount;
    var rowCount = this.rowCount;
    var region = this.REGION * this.REGION;

    for (var y = 0; y <= rowCount; y++) {
      for (var x = 0; x <= columnCount; x++) {
        var source = this.points[this.getPointIndex(x, y)];
        var neighborCount = 1;
        var deltaX = x * cellSize;
        var deltaY = y * cellSize;

        for (var i = 0; i < this.NEIGHBORS.length; i++) {
          var neighbor = this.NEIGHBORS[i];
          var nx = x + neighbor.x;
          var ny = y + neighbor.y;

          if (nx < 0 || nx > columnCount || ny < 0 || ny > rowCount) continue;

          var target = this.points[this.getPointIndex(nx, ny)];
          deltaX += target.x - neighbor.x * cellSize;
          deltaY += target.y - neighbor.y * cellSize;
          neighborCount++;
        }

        source.vx += (deltaX / neighborCount - source.x) * this.DELTA_RATE;
        source.vy += (deltaY / neighborCount - source.y) * this.DELTA_RATE;

        if (this.axis) {
          var dx = this.axis.x - source.x;
          var dy = this.axis.y - source.y;
          var dist = dx * dx + dy * dy;
          var rate = 1 - dist / region;
          if (rate > 0) {
            source.vx += dx * rate * this.velocityRate;
            source.vy += dy * rate * this.velocityRate;
          }
        }
      }
    }

    for (var i = 0; i < this.points.length; i++) {
      this.points[i].propagateForce();
    }

    this.velocityRate = this.VELOCITY_RATE;
  },

  render: function () {
    requestAnimationFrame(this.render);
    this.context.clearRect(0, 0, this.width, this.height);
    this.propagateForce();

    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i].render(this.context);
    }
  }
};

var CELL = function (baseSize, points) {
  this.baseSize = baseSize;
  this.points = points;
};

CELL.prototype = {
  render: function (ctx) {
    ctx.strokeStyle = 'hsl(220, 80%, 60%)';
    ctx.fillStyle = 'hsl(' +
      (210 - 10 * (this.points[1].x - this.points[0].x) * (this.points[3].y - this.points[0].y) / this.baseSize)
      + ', 80%, 50%)';
    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);
    for (var i = 1; i < this.points.length; i++) {
      ctx.lineTo(this.points[i].x, this.points[i].y);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
};

var POINT = function (x, y) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
};

POINT.prototype = {
  FRICTION: 0.92,

  propagateForce: function () {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= this.FRICTION;
    this.vy *= this.FRICTION;
  }
};

$(function () {
  RENDERER.init();
});
