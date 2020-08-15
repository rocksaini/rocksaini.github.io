
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
console.log('welcome to the game');

let circleTurn;
const elm = document.querySelectorAll("[data-cell]");

const board = document.getElementById("board");

const winningMessageElement = document.getElementById("winningMessage");
console.log(board);

const MessageText = document.querySelector('[data-Winning-message-text]');
console.log(MessageText)

const restartButton = document.getElementById("restartButton")
console.log(restartButton)

const winningCombinatin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

startGame();

restartButton.addEventListener("click", startGame);

function startGame() {
    elm.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleclick)
        cell.addEventListener('click', handleclick, { once: true }
        )
    });
    hoverClass();
    winningMessageElement.classList.remove('show')

}


function handleclick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    // placemark
    placeMark(cell, currentClass)

    // check for win 
    if (wins(currentClass)) {
        endgame(false)
    }
    else if (isDraw()) {
        endgame(true)
    }

    else {
        swapTurn()
        hoverClass()
    }

}

// Message when game end 
function endgame(draw) {
    if (draw) {
        MessageText.innerText = " DRAW!"
    }
    else {
        MessageText.innerText = `${circleTurn ? "O's" : "X "} Wins !`
    }

    winningMessageElement.classList.add('show')
}

// wins condition 

function wins(currentClass) {
    return winningCombinatin.some(combination => {
        return combination.every(index => {
            return elm[index].classList.contains(currentClass)
        })
    })

}
// end of win condition 

// Draw condition 
function isDraw() {
    return [...elm].every(cell => {
        return cell.classList.contains(X_CLASS) ||
            cell.classList.contains(CIRCLE_CLASS)
    })
}
// end of Draw condition 



function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}


// Switch turns
function swapTurn() {
    circleTurn = !circleTurn

}

// hover class on cells 
function hoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }

}




