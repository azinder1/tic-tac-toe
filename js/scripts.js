//Business logic
function Board () {
this.board = [[0,0,0],[0,0,0],[0,0,0]];
};


UIboard = new Board();
Board.prototype.assignCoordinates = function (x,y,player) {

  if (player === "X") {
    this.board [x][y] = 1
  }
  else {
    this.board [x][y] = 4
  }
}

Board.prototype.rowWin = function () {
  var rowZeroTotal= 0;
  for (var i = 0 ; i < 3; i++) {
    rowZeroTotal += UIboard.board [0][i];
  }
  var rowOneTotal= 0;
  for (var i = 0 ; i < 3; i++) {
    rowOneTotal += UIboard.board [1][i];
  }
  var rowTwoTotal= 0;
  for (var i = 0 ; i < 3; i++) {
    rowTwoTotal += UIboard.board [2][i];
  }
  var rowTotal =[rowZeroTotal, rowOneTotal, rowTwoTotal];
  if (rowTotal.includes(3)) {
    alert("X win!")
    }
  else if (rowTotal.includes(12)) {
    alert("O wins!")
    }
  return rowTotal;
}
Board.prototype.colWin = function () {
  var colZeroTotal= 0;
  for (var i = 0 ; i < 3; i++) {
    colZeroTotal += UIboard.board [i][0];
  }
  var colOneTotal= 0;
  for (var i = 0 ; i < 3; i++) {
    colOneTotal += UIboard.board [i][1];
  }
  var colTwoTotal= 0;
  for (var i = 0 ; i < 3; i++) {
    colTwoTotal += UIboard.board [i][2];
  }
  var colTotal =[colZeroTotal, colOneTotal, colTwoTotal];
  if (colTotal.includes(3)) {
    alert("X wins!")
    }
    else if (colTotal.includes(12)) {
      alert("O wins!")
      }
  return colTotal;
}
Board.prototype.diaWin = function () {
  if (UIboard.board[1][1] === 1 && ((UIboard.board[2][2] === 1 && UIboard.board[0][0] === 1) || (UIboard.board[0][2] === 1 && UIboard.board[2][0] === 1))) {
    alert("X wins!")
  }
  else if (UIboard.board[1][1] === 4 && ((UIboard.board[2][2] === 4 && UIboard.board[0][0] === 4) || (UIboard.board[0][2] === 4 && UIboard.board[2][0] === 4))) {
    alert("O wins!")
  }
}

var countTotal = 9;
var player = "";

var counter = function(){
  countTotal -= 1;
  userPlayer(countTotal);
};

var userPlayer = function(countTotal) {
  if (countTotal % 2 === 0) {
    player = "X";
  }
  else {
    player = "O";
  }
console.log(player);
return player
}

var coordinates = function (cell) {
  var inputx = cell.className;
  inputx = inputx.slice(-5).replace(/\D+/g, '').split("");
  var inputy = inputx.splice(0,1)
  inputx = parseInt(inputx);
  inputy = parseInt(inputy);
  UIboard.assignCoordinates(inputx, inputy, player)
}

// user interface logic
$(document).ready(function() {
  $('.cell').click(function(){
    counter();
    coordinates(this);
    debugger;
    $(this).text(player);
     UIboard.diaWin();
     UIboard.rowWin();
     UIboard.colWin();
     console.log(UIboard);
  });
});
