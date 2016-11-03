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
  var winnerRow = "";
  var rowTotal =[0, 0, 0];
  for (j=0;j<3;j++) {
    for (var i = 0 ; i < 3; i++) {
      rowTotal[j] += UIboard.board [j][i];
    }
  }
  if (rowTotal.includes(3)) {
    winnerRow = winnerRow.concat("X Wins!");
  }
  else if (rowTotal.includes(12)) {
    winnerRow =  winnerRow.concat("O Wins!");
  }
  return winnerRow;
}

Board.prototype.colWin = function () {
  var winnerCol = "";
  var colTotal =[0, 0, 0];
  for (j=0;j<3;j++) {
    for (var i = 0 ; i < 3; i++) {
      colTotal[j] += UIboard.board [i][j];
    }
  }

  if (colTotal.includes(3)) {
    winnerCol = winnerCol.concat("X Wins!");
  }
  else if (colTotal.includes(12)) {
    winnerCol =  winnerCol.concat("O Wins!");
  }
  return winnerCol;
}


Board.prototype.diaWin = function () {
  if (UIboard.board[1][1] === 1 && ((UIboard.board[2][2] === 1 && UIboard.board[0][0] === 1) || (UIboard.board[0][2] === 1 && UIboard.board[2][0] === 1))) {
    return ("X Wins!");
  }
  else if (UIboard.board[1][1] === 4 && ((UIboard.board[2][2] === 4 && UIboard.board[0][0] === 4) || (UIboard.board[0][2] === 4 && UIboard.board[2][0] === 4))) {
    return ("O Wins!");
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

var champion = function() {
  var diaWin = UIboard.diaWin()
  var colWin = UIboard.colWin()
  var rowWin = UIboard.rowWin()

  if (diaWin) {
    return diaWin;
  }
  else if (colWin) {
    return colWin;
  }
  else if (rowWin) {
    return rowWin;
  }
}

// user interface logic
$(document).ready(function() {
  $('.cell').one("click", function(){
    counter();
    coordinates(this);
    $(this).text(player);
     var whosTheWinner = champion ()
     $('.winner').text(whosTheWinner);
  });
  $("#refresh").click(function() {
    location.reload();
  })
});
