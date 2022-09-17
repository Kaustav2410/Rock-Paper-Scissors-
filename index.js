const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay= document.getElementById('result');

const posssibleChoices=document.querySelectorAll('.button');

let userChoice;
let computerChoice;
posssibleChoices.forEach(posssibleChoice=>posssibleChoice.addEventListener('click',(e) =>{ 
userChoice=e.target.id
userChoiceDisplay.innerHTML=userChoice;
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
    computerChoiceDisplay.innerHTML=computerChoice;

}

function generateResult(){

    let result;

    if(computerChoice===userChoice){
        result="It's a draw";
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!';
      }
      if (computerChoice === "rock" && userChoice === "scissors") {
        result = 'you lost!';
      }
      if (computerChoice === "paper" && userChoice === "scissors") {
        result = 'you win!';
      }
      if (computerChoice === "paper" && userChoice === "rock") {
        result = 'you lose!';
      }
      if (computerChoice === "scissors" && userChoice === "rock") {
        result = 'you win!';
      }
      if (computerChoice === "scissors" && userChoice === "paper") {
        result = 'you lose!';
      }
      resultDisplay.textContent = result


}