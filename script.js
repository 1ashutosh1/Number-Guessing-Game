let randomNumber = Math.floor(Math.random()*100 + 1);
let prevGuesses = [];
const guesses = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
let remaining = 10;
const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const GuessesRemaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let playGame = true;

function checkValid(){
  const num = parseInt(userInput.value);
  if(num == '' || num < 1 || num > 100 || isNaN(num)){
    lowOrHi.innerHTML = "<h2>Enter a Valid Number</h2>";
  } else{
    compareNum(num);
  }
}

function compareNum(num){
  if(remaining > 0){
   if(num > randomNumber){
     lowOrHi.innerHTML = `<h2>The Number is Lower than ${num}</h2>`;
     prevGuesses.push(num);
     guesses.innerHTML = prevGuesses;
     remaining--;
     GuessesRemaining.innerHTML = remaining;
   } else if(num < randomNumber){
      lowOrHi.innerHTML = `<h2>The Number is Higher than ${num}</h2>`;
      prevGuesses.push(num);
      guesses.innerHTML = prevGuesses;
      remaining--;
      GuessesRemaining.innerHTML = remaining;
   } else {
    lowOrHi.innerHTML = "<h2>You guessed the number correctly</h2>";
    endGame();
   } 
  }
  else{
    lowOrHi.innerHTML = `<h2>Game Over. The Random Number was ${randomNumber}`;
    endGame();
  }
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const startButton = document.querySelector('#newGame');
  startButton.addEventListener('click', function(e){
    randomNumber = Math.floor(Math.random()*100 + 1);
    prevGuesses = [];
    remaining = 10;
    guesses.innerHTML = '';
    GuessesRemaining.innerHTML = remaining;
    lowOrHi.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    checkValid();
  });
}
