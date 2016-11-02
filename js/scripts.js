//Business logic
function Board () {
this.board = [[0,0,0],[0,0,0],[0,0,0]];
};


UIboard = new Board();
 Board.prototype.assignCoordinates = function (x,y) {
   this.board [x][y] = 1
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
    alert("you won!")
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
    alert("you won!")
    }
  return colTotal;
}
Board.prototype.diaWin = function () {
  if (UIboard.board[1][1] === 1 && ((UIboard.board[2][2] === 1 && UIboard.board[0][0] === 1) || (UIboard.board[0][2] === 1 && UIboard.board[2][0] === 1))) {
    alert("you won!")
  }
}

var coordinates = function (cell) {
  var inputx = cell.className;
  inputx = inputx.slice(-5).replace(/\D+/g, '').split("");
  var inputy = inputx.splice(0,1)
  inputx = parseInt(inputx);
  inputy = parseInt(inputy);
  UIboard.assignCoordinates(inputx, inputy)
}

// user interface logic
$(document).ready(function() {
  $('.cell').click(function(){

    coordinates(this);
    console.log(UIboard);
    $(this).text("X");
     UIboard.diaWin();
     UIboard.rowWin();
     UIboard.colWin();
  });
});
