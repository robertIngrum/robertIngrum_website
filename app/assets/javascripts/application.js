// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require_tree .
//= require_self

function drawLine(ctx, offset, maxWidth, maxHeight) {
  var mod1 = [(maxWidth / 3) + offset,     (maxHeight * 1.3) + -offset];
  var mod2 = [(2 * maxWidth / 3) + offset, (-maxHeight / 3) + -offset];

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(
      mod1[0],  mod1[1],
      mod2[0],  mod2[1],
      maxWidth, maxHeight);
  ctx.stroke();
}

$(document).ready(function() {
  var canvas = document.getElementById('background');
  var ctx    = canvas.getContext('2d');

  var maxWidth  = $(window).width();
  var maxHeight = $(window).height();

  var gradient = ctx.createLinearGradient(0, 0, maxWidth, maxHeight);
  gradient.addColorStop(0,   'magenta');
  gradient.addColorStop(0.5, 'blue');
  gradient.addColorStop(1,   'red');

  canvas.setAttribute('width',  maxWidth);
  canvas.setAttribute('height', maxHeight);

  ctx.strokeStyle = gradient;

  drawLine(ctx, 0, maxWidth, maxHeight);
  for (var i = 1; i < 30; i++) {
    drawLine(ctx,   i * 50, maxWidth, maxHeight);
    drawLine(ctx,  -i * 50, maxWidth, maxHeight);
  }
});
