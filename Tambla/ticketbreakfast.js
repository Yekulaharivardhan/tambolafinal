var row1 = '';
var row2 = '';
var row3 = '';
var row1a = [0, 0, 0, 0, 0, 0, 0, 0,0];
var row2a = [0, 0, 0, 0, 0, 0, 0, 0,0];
var row3a = [0, 0, 0, 0, 0, 0, 0, 0,0]
var numdone = [0];
var numdone02 = [0];
var numdone1 = [0];
var numdone2 = [0];
var randnum = 0;
var k = 0;

for (var i = 0; i < 9; i++) {
  row1 += '<button id="' + i + '" onclick="func(' + i + ')"></button>';
  document.getElementById('row1').innerHTML = row1;
}

for (var i = 10; i < 19; i++) {
  row2 += '<button id="' + i + '" onclick="func(' + i + ')"></button>';
  document.getElementById('row2').innerHTML = row2;
}

for (var i = 20; i < 29; i++) {
  row3 += '<button id="' + i + '" onclick="func(' + i + ')"></button>';
  document.getElementById('row3').innerHTML = row3;
}




for (var i = 0; i < 9; i++)
 {
  randnum = Math.floor(Math.random() * 90 + 1);
  
  for (var y = 0; y < numdone.length; y++) {
    if (randnum == numdone[y]) {
      randnum = Math.floor(Math.random() * 90 + 1);
      y = 0;
    }
  }

  numdone02.push(randnum);

  if (randnum <= 9) {
    numdone.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
    row1a[0] = randnum;
  } else if (randnum >= 10 && randnum <= 19) {
    numdone.push(10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
    row1a[1] = randnum;
  } else if (randnum >= 20 && randnum <= 29) {
    numdone.push(20, 21, 22, 23, 24, 25, 26, 27, 28, 29);
    row1a[2] = randnum;
  } 
  
  
 
}

for (var i = 0; i < 9; i++) 


{
  randnum = Math.floor(Math.random() * 90 + 1);

  for (var y = 0; y < numdone1.length; y++) {
    if (randnum == numdone1[y]) {
      randnum = Math.floor(Math.random() * 90 + 1);
      y = 0;
    }

    for (var j = 0; j < numdone02.length; j++) {
      if (randnum == numdone02[j]) {
        randnum = Math.floor(Math.random() * 90 + 1);
        j = 0;
      }
    }
  }

  numdone02.push(randnum);

  if (randnum <= 9) {
    numdone1.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
    row2a[0] = randnum;
  } else if (randnum >= 10 && randnum <= 19) {
    numdone1.push(10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
    row2a[1] = randnum;
  } else if (randnum >= 20 && randnum <= 29) {
    numdone1.push(20, 21, 22, 23, 24, 25, 26, 27, 28, 29);
    row2a[2] = randnum;
  } 
  
  
  
  
}

for (var i = 0; i < 9; i++)
 {
  randnum = Math.floor(Math.random() * 90 + 1);

  for (var y = 0; y < numdone2.length; y++) {
    if (randnum == numdone2[y]) {
      randnum = Math.floor(Math.random() * 90 + 1);
      y = 0;
    }

    for (var j = 0; j < numdone02.length; j++) {
      if (randnum == numdone02[j]) {
        randnum = Math.floor(Math.random() * 90 + 1);
        j = 0;
      }
    }    
  }

  numdone02.push(randnum);

  if (randnum <= 9) {
    numdone2.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
    row3a[0] = randnum;
  } else if (randnum >= 10 && randnum <= 19) {
    numdone2.push(10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
    row3a[1] = randnum;
  } else if (randnum >= 20 && randnum <= 29) {
    numdone2.push(20, 21, 22, 23, 24, 25, 26, 27, 28, 29);
    row3a[2] = randnum;
  } 
  
}

for (var i = 0; i < 9; i++) {
  if (row1a[i] != 0 && row2a[i] != 0) {
    if (row1a[i] > row2a[i]) {
      k = row1a[i];
      row1a[i] = row2a[i];
      row2a[i] = k;
    }
  }

  if (row1a[i] != 0 && row3a[i] != 0) {
    if (row1a[i] > row3a[i]) {
      k = row1a[i];
      row1a[i] = row3a[i];
      row3a[i] = k;
    }
  }

  if (row2a[i] != 0 && row3a[i] != 0) {
    if (row2a[i] > row3a[i]) {
      k = row2a[i];
      row2a[i] = row3a[i];
      row3a[i] = k;
    }
  }
}

for (var i = 0; i < 9; i++) {
  if (row1a[i] != 0) {
    document.getElementById(i).innerHTML = row1a[i];
  }

  if (row2a[i] != 0) {
    document.getElementById(i+10).innerHTML = row2a[i];
  }
  
  if (row3a[i] != 0) {
    document.getElementById(i+20).innerHTML = row3a[i];
  }
}
function myFunction(){alert ("You Win")}



function func(j) {
  var button = document.getElementById(j).innerHTML;
  if (document.getElementById(j).style.backgroundColor == 'blue') {
    document.getElementById(j).style.backgroundColor = '#05595B';
  }  else if (button != '') {
    document.getElementById(j).style.backgroundColor = 'blue';
  }
else (button != ''); 
  document.getElementById(j)
  
}
