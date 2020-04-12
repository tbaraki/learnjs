// game values
let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const gameWrapper = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
gameWrapper.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        guessInput.value = '';
        window.location.reload();
    }
})

// listen for guess btn
guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value);
   // validate
   if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
   }
   // check if won
   else if(guess === winningNum){
        // game over - won
        gameOver(true, `${winningNum} is correct. You win!`)
   } else {
        // wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0){
            // game over - lost
            gameOver(false, `Game over. You lost. The correct answer was ${winningNum}.`)
        } else {
            // game continues - answer wrong
            guessInput.value = '';
            // change border color
            guessInput.style.borderColor = 'red';
            setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left.`)
        }
    }
})

// game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    // write victory message
    setMessage(msg, color) ;

    // play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

// randomize winnign num
function getRandomNum(min, max){
    return (Math.floor(Math.random()*(max-min+1)+min));
}