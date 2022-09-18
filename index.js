const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay= document.getElementById('result');

const posssibleChoices=document.querySelectorAll('.button');

const reload = document.getElementById('reload-button');

const popup = document.getElementById('popup');
const popuptext = document.getElementById('popup-heading');
const container = document.getElementById('container');
let userChoice;
let computerChoice;
let computerScore=0;
let userScore=0;
let rounds=0

posssibleChoices.forEach(posssibleChoice=>posssibleChoice.addEventListener('click',(e) =>{ 
userChoice=e.target.id;
  generateComputerChoice();
  generateResult();
}))

function generateComputerChoice(){

    const randomNumber=Math.floor(Math.random()*3)+1;
    //This method only works if the minimum number is 1
    console.log(randomNumber);
    /*
    function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    Math.random() does not provide cryptographically secure random numbers. Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely the window.crypto.getRandomValues() method.
    */
    if(randomNumber===1){
        computerChoice='rock';
    }
    if(randomNumber===2){
        computerChoice='scissors';
    }
    if(randomNumber===3){
        computerChoice='paper';   
    }
}

function generateResult(){

    if(computerChoice===userChoice){
        resultDisplay.textContent=`It's a draw! You choose ${userChoice} and computer choose ${computerChoice}`;
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        userScore++;
        resultDisplay.textContent=`You won ! You choose ${userChoice} and computer choose ${computerChoice}`;
      }
      if (computerChoice === "rock" && userChoice === "scissors") {
        computerScore++;
        resultDisplay.textContent=`You lost ! You choose ${userChoice} and computer choose ${computerChoice}`;
      }
      if (computerChoice === "paper" && userChoice === "scissors") {
        userScore++;
        resultDisplay.textContent=`You won! You choose ${userChoice} and computer choose ${computerChoice}`;
      }
      if (computerChoice === "paper" && userChoice === "rock") {
        computerScore++;
        resultDisplay.textContent=`You lost! You choose ${userChoice} and computer choose ${computerChoice}`;
      }
      if (computerChoice === "scissors" && userChoice === "rock") {
        userScore++;
        resultDisplay.textContent=`You won! You choose ${userChoice} and computer choose ${computerChoice}`;
      }
      if (computerChoice === "scissors" && userChoice === "paper") {
        computerScore++;
        resultDisplay.textContent=`You lost! You choose ${userChoice} and computer choose ${computerChoice}`;
      }
      rounds++;
      computerChoiceDisplay.textContent=computerScore;
      userChoiceDisplay.textContent=userScore;

      console.log()
      if(computerScore === 5 || userScore === 5){
        if(computerScore===5){
          popuptext.textContent='You lose';
        }
        else {
          popuptext.textContent='You win';
        }
        popup.style.display='inline-block';
      }
}
//When we click on the Play again button it will refresh the page
reload.addEventListener('click',()=>{
  userChoice=null;
  computerChoice=null;
  userScore=0;
  computerScore=0;
  computerChoiceDisplay.textContent=computerScore;
  userChoiceDisplay.textContent=userScore;
  resultDisplay.textContent="";
  popup.style.display='none';
})