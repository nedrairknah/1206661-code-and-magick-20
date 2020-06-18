'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BTWN_BARS = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;
var POSITION_X = 140;
var POSITION_Y = 260;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// вызывает окно


// максимальное значение

function getMaxElement(arr) {
  return Math.max.apply(null, arr);
}

// списал у одногруппника, не понимаю где нам это объясняли, и как до этого можно было дойти самостоятельно
function getRandomSaturation(hslColor) {
  var randomSaturation = (Math.round(Math.random() * 100));
  var colors = hslColor.split(',');
  colors[1] = randomSaturation + '%';
  return colors.join(',');
}

// вызывает окно
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var colorPlayerColumn;
    if (players[i] === 'Вы') {
      colorPlayerColumn = 'rgba(255, 0, 0, 1)';
    } else {
      colorPlayerColumn = getRandomSaturation('hsl(249, 50%, 50%)');
    }

    ctx.fillStyle = colorPlayerColumn;
    ctx.fillRect(POSITION_X - GAP + (BTWN_BARS + BAR_WIDTH) * i, POSITION_Y - GAP * 2, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], POSITION_X + (BTWN_BARS + BAR_WIDTH) * i, POSITION_Y);
  }

  // надпcь заглавная
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 210, 20);
  ctx.fillText('Список результатов:', 210, 40);
};
