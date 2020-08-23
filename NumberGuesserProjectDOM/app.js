let min = 1,
    max = 10,
    winningNum = getWiningNum(min, max),
    guessesLeft = 3;

const UIgame = document.querySelector('#game'),
      UIMinNum = document.querySelector('.min-num'),
      UIMaxNum = document.querySelector('.max-num'),
      UIGuessBtn = document.querySelector('#guess-btn'),
      UIGuessInput = document.querySelector('#guess-input'),
      UIMessage = document.querySelector('.message');

UIMinNum.textContent = min;
UIMaxNum.textContent = max;

UIgame.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

UIGuessBtn.addEventListener('click', function(){
    let guess = parseInt(UIGuessInput.value);
    console.log(guess);
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a valid number between ${min} and ${max}`, 'red');
    }else{
        if(guess === winningNum){
            gameOver(true, `${winningNum} is correct !`);
        }else{
            guessesLeft -= 1;
            if(guessesLeft === 0){
                gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
            }else{
                UIGuessInput.style.borderColor = 'red';
                UIGuessInput.value = '';
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
            }
        }
    }
})

function getWiningNum(min, max){
    return Math.floor(Math.random()*(max-min + 1)+min);
}

function gameOver(won, msg){
    UIGuessInput.disabled = true;
    let color = won === true ? 'green' : 'red';
    UIGuessInput.style.borderColor = color;
    setMessage(msg, color);

    UIGuessBtn.value = 'Play Again';
    UIGuessBtn.className += 'play-again';
}

function setMessage(msg, color){
    UIMessage.style.color = color;
    UIMessage.textContent = msg;
}