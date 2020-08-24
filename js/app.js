var squares = document.querySelectorAll(".square");
var guessColor;
var pickedColor;
var colorText = document.querySelector("h1");
var header = document.querySelector("#header");
var newColorsBtn = document.querySelector("button");
var easyBtn = document.querySelector("#easyMode");
var hardBtn = document.querySelector("#hardMode");
var firstRow = document.getElementsByClassName("row")[0];
var secondRow = document.getElementsByClassName("row")[1];

startGame();


newColorsBtn.addEventListener("click", function () {
    restartGame();
    startGame();


});


easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    secondRow.remove();
    restartGame();
    startGame();
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    insertAfter(secondRow, firstRow);
    restartGame();
    startGame();

});



function startGame() {
    squares = document.querySelectorAll(".square");
    squares.forEach(function (square) {
        square.style.backgroundColor = random_rgb();
        guessColor = random_guessColor();
        updateDisplay();
        square.addEventListener("click", function (clickedSquare) {
            pickedColor = this.style.backgroundColor;
            if (pickedColor === guessColor) {
                winGame();
            }
            else {
                clickedSquare.target.classList.add("dissovle");
            }
        });
    });
}

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    var randomColor = 'rgb(' + o(r() * s) + ', ' + o(r() * s) + ', ' + o(r() * s) + ')';
    return randomColor;
}

function random_guessColor() {
    var o = Math.round, r = Math.random, s = squares.length - 1;
    var i = o(r() * s);
    var randomColor = squares[i].style.backgroundColor;
    return randomColor;
}

function updateDisplay() {
    colorText.textContent = guessColor;
}


function winGame() {
    squares.forEach(function (square) {
        square.style.backgroundColor = guessColor;
        header.style.backgroundColor = guessColor;
    });
}

function restartGame() {
    header.style.backgroundColor = "rgb(145, 38, 38)";
    squares.forEach(function (square) {
        square.classList.remove("dissovle");
    });
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}