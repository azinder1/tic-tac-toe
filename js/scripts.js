//Business logic
function Board () {
this.board = [[0,0,0],[0,0,0],[0,0,0]];
};

UIboard = new Board();
 Board.prototype.assignCoordinates = function (x,y) {
   this.board [x][y] = 1
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

  });
});