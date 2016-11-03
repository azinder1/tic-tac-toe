//Business logic
function Player() {     // two properties of our object Player
  // this.turn = player;
  this.playerX = "X";
  this.playerO = "O";
  this.totalWinsX = 0
  this.totalWinsO = 0
}
var userPlayer = new Player();

Player.prototype.assignTurn = function(countTotal) { //Assigns object property based on turn counter
  player = "";
  if (countTotal % 2 === 0) {
    player = userPlayer.playerX;
  }
  else {
    player = userPlayer.playerO;
  }
return player;
}

function Board () { //object with array property that creates a empty grid
this.board = [[0,0,0],[0,0,0],[0,0,0]];
};

UIboard = new Board();

Board.prototype.assignArrayValues = function (x,y,player) { //takes in coordinates of the click and assigns unique values based on player value
  if (player === userPlayer.playerX) {
    this.board [x][y] = 1
  }
  else {
    this.board [x][y] = 4
  }
}

Board.prototype.rowWin = function () { //sums row array values and determines winner based on total equaling 3 (X) or 12 (O)
  var winnerRow = "";
  var rowTotal =[0, 0, 0];
  for (j=0;j<3;j++) {
    for (var i = 0 ; i < 3; i++) {
      rowTotal[j] += UIboard.board [j][i];
    }
  }
  if (rowTotal.includes(3)) {
    winnerRow = winnerRow.concat("X Wins!");
    userPlayer.totalWinsX += 1
  }
  else if (rowTotal.includes(12)) {
    winnerRow =  winnerRow.concat("O Wins!");
    userPlayer.totalWinsO += 1
  }
  return winnerRow;
}

Board.prototype.colWin = function () { //sums column array values and determines winner based on total equaling 3 (X) or 12 (O)
  var winnerCol = "";
  var colTotal =[0, 0, 0];
  for (j=0;j<3;j++) {
    for (var i = 0 ; i < 3; i++) {
      colTotal[j] += UIboard.board [i][j];
    }
  }
  if (colTotal.includes(3)) {
    winnerCol = winnerCol.concat("X Wins!");
    userPlayer.totalWinsX += 1
  }
  else if (colTotal.includes(12)) {
    winnerCol =  winnerCol.concat("O Wins!");
    userPlayer.totalWinsO += 1
  }
  return winnerCol;
}

Board.prototype.diaWin = function () { //scans array based on diagnal values to see if diagnals of 1 (X) or 4 (O) won
  if (UIboard.board[1][1] === 1 && ((UIboard.board[2][2] === 1 && UIboard.board[0][0] === 1) || (UIboard.board[0][2] === 1 && UIboard.board[2][0] === 1))) {
    return ("X Wins!");
    userPlayer.totalWinsX += 1
  }
  else if (UIboard.board[1][1] === 4 && ((UIboard.board[2][2] === 4 && UIboard.board[0][0] === 4) || (UIboard.board[0][2] === 4 && UIboard.board[2][0] === 4))) {
    return ("O Wins!");
    userPlayer.totalWinsO += 1
  }
}

var countTotal = 9;

var counter = function(){ //decraments based on click count on unclicked cells
  countTotal -= 1;
  userPlayer.assignTurn(countTotal)
};



var coordinates = function (cell) { //takes in class names and removes superfluous names to provide x and y coordinate
  var inputx = cell.className;
  inputx = inputx.slice(-5).replace(/\D+/g, '').split("");
  var inputy = inputx.splice(1,1)
  inputx = parseInt(inputx);
  inputy = parseInt(inputy);
  UIboard.assignArrayValues(inputx, inputy, player)
}

var champion = function() { //returns string based on what win-type occured
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
  else if (countTotal === 0) {
    return "It's a tie"
  }
}

// user interface logic
$(document).ready(function() {
  $('.cell').one("click", function(){
    counter();
    coordinates(this);
    $(this).text(player);
     var whosTheWinner = champion ()
     if (whosTheWinner) {
       $('.outComePanel').show()
     }
     $('.winner').text(whosTheWinner);
  });
  $("#refresh").click(function() {
    location.reload();
  })
});
