"use strict";

var arr = [];

function chart() {
  var button = '';
  for (var i = 1; i < 91; i++) {
    button += "<button id='" + i + "'>" + i + "</button>";
  
  }
    return button
  
}

function start() {
  
  var num = Math.floor(Math.random() * 90 + 1);
  for (var i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      num = Math.floor(Math.random() * 90 + 1);
      i = 0;
            }}
  document.getElementById('number').innerHTML = num;
  document.getElementById(num).style.backgroundColor = 'cornflowerblue';

  if (arr.length == 90) {
    alert('Game Over!!!!!!!');
    location.reload();
  }
  arr.push(num);
}

document.getElementById('Chartbuttons').innerHTML = chart();