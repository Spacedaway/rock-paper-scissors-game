/* Declaring variables and assigning them to query selectors. */
let playerScore = document.querySelector('.Player-Score');
let computerScore = document.querySelector('.Computer-Score');
let rockButton = document.querySelector('.Rock');
let paperButton = document.querySelector('.Paper');
let scissorsButton = document.querySelector('.Scissors');
let ResetButton = document.querySelector('.Reset');
let resultEl = document.querySelector('#Result');
let playerCount = 0;
let computerCount = 0;
const rockVal = 1, paperVal = 2, scissorsVal = 3;

/**
 * If the player's choice is the same as the computer's choice, it's a tie. If the player's choice is
 * 1, and the computer's choice is 2, the computer wins. If the player's choice is 1, and the
 * computer's choice is 3, the player wins. If the player's choice is 2, and the computer's choice is
 * 3, the computer wins. If the player's choice is 2, and the computer's choice is 1, the player wins.
 * If the player's choice is 3, and the computer's choice is 1, the computer wins. If the player's
 * choice is 3, and the computer's choice is 2, the player wins.
 */
function playGame(val) {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if(val === randomNum) {
        resultEl.textContent = 'Tie'
    }
    else if(val == 1) {
        if(randomNum == 2) {
            resultEl.textContent = 'Computer Won';
            computerCount++;
            computerScore.textContent = computerCount;

        }
        else{
            resultEl.textContent = 'Player Won'
            playerCount++;
            playerScore.textContent = playerCount;
        }
    }
    else if(val == 2) {
        if(randomNum == 3) {
            resultEl.textContent = 'Computer Won';
            computerCount++;
            computerScore.textContent = computerCount;
        }
        else {
            resultEl.textContent = 'Player Won';
            playerCount++;
            playerScore.textContent = playerCount;
        }
    }
    else if(val == 3) {
        if(randomNum == 1) {
            resultEl.textContent = 'Computer Won';
            computerCount++;
            computerScore.textContent = computerCount;
        }
        else {
            resultEl.textContent = 'Player Won';
            playerCount++;
            playerScore.textContent = playerCount;
        }
    }
}

/**
 * The function resets the player and computer scores to 0 and clears the result element.
 */
function reset() {
    playerScore.innerHTML = '';
    computerScore.innerHTML = '';
    resultEl.innerHTML = '';
    playerCount = 0; 
    computerCount = 0;
}

/* It's adding an event listener to each button. When the button is clicked, it calls the function that
is passed to it. */
rockButton.addEventListener('click', function(){playGame(rockVal)});
paperButton.addEventListener('click', function(){playGame(paperVal)});
scissorsButton.addEventListener('click', function(){playGame(scissorsVal)});
ResetButton.addEventListener('click', reset);