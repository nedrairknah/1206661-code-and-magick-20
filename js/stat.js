'use strict'

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BTWN_BARS = 50;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;
var POSITION_X = 140;
var POSITION_Y = 260;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

//вызывает окно

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)')
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  // var playerIndex = 0;
  // var playerName ='Вы';

  // var players = ['Вы', 'Иван', 'Юлия', 'Кекс'];

  for (var i = 0; i < players.length; i++) {

    // maxTime      times[i]
    // --------  =  ---------
    // BAR_HEIGHT        X

   // X = (BAR_HEIGHT * times[i]) / maxTime

    ctx.fillText(players[i], POSITION_X + (BTWN_BARS + BAR_WIDTH) * i, POSITION_Y);
    ctx.fillRect(POSITION_X - GAP + (BTWN_BARS + BAR_WIDTH) * i, POSITION_Y - GAP * 2,
    BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }

  // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // ctx.fillText(playerName, POSITION_X + (BTWN_BARS + BAR_WIDTH) * playerIndex, POSITION_Y);
  // ctx.fillRect(POSITION_X - GAP + (BTWN_BARS + BAR_WIDTH) * playerIndex, POSITION_Y - GAP * 2, BAR_WIDTH, BAR_HEIGHT)

  // var playerIndex = 1;
  // var playerName ='Иван';

  // ctx.fillStyle = 'green';
  // ctx.fillText(playerName, POSITION_X + (BTWN_BARS + BAR_WIDTH) * playerIndex, POSITION_Y);
  // ctx.fillRect(POSITION_X - GAP + (BTWN_BARS + BAR_WIDTH) * playerIndex, POSITION_Y - GAP * 2, BAR_WIDTH, BAR_HEIGHT)

  // var playerIndex = 2;
  // var playerName ='Юлия';

  // ctx.fillStyle = 'blue';
  // ctx.fillText(playerName, POSITION_X + (BTWN_BARS + BAR_WIDTH) * playerIndex, POSITION_Y);
  // ctx.fillRect(POSITION_X - GAP + (BTWN_BARS + BAR_WIDTH) * playerIndex, POSITION_Y - GAP * 2, BAR_WIDTH, BAR_HEIGHT)

  //надпcь
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 210, 20);
  ctx.fillText('Список результатов:', 210, 40);
};
