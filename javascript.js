

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const humanChoice = this.getAttribute("class");
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});


function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random()*choices.length)];
}

 let results = document.querySelector(".results");


function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') { 
        ++humanScore;
        results.innerHTML = "Computer chose " + computerChoice + "<br>Rock beats scissors! You win 🎉<br>Your score: " + humanScore + "<br>Computer Score: " + computerScore;
    } else if  (humanChoice === 'paper' && computerChoice === 'rock') {
        ++humanScore;
        results.innerHTML = "Computer chose " + computerChoice + "<br>Paper beats rock! You win 🎉<br>Your score: " + humanScore + "<br>Computer Score: " + computerScore ;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        ++humanScore;
        results.innerHTML = "Computer chose " + computerChoice  + "<br>Scissors beats paper! You win 🎉<br>Your score: " + humanScore + "<br>Computer Score: " + computerScore ;
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        ++computerScore;
        results.innerHTML = "Computer chose " + computerChoice + "<br>Paper beats rock! You lose 😭<br>Your score: " + humanScore + "<br>Computer Score: " + computerScore ;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        ++computerScore;
        results.innerHTML = "Computer chose " + computerChoice + "<br>Scissors beats paper! You lose 😭<br>Your score: " + humanScore + "<br>Computer Score: " + computerScore ;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        ++computerScore;
        results.innerHTML = "Computer chose " + computerChoice + "<br>Rock beats scissors! You lose 😭<br>Your score: " + humanScore + "<br>Computer Score: " + computerScore ;
    } else { 
        results.innerHTML = "You both chose " + computerChoice + " 😲<br>Tie.<br>Your score: " + humanScore +  "<br>Computer Score: " + computerScore ;
} }




/* function playGame(){
   for (let i = 0; i < 5; i++) { 
   const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();


    playRound(humanSelection, computerSelection);
    


    if (i === 4) {  //this makes sure that the below does not trigger on every round but only at the end
       if (humanScore > computerScore) {
            alert ("You win the game!");
        } else if (humanScore < computerScore) {
            alert ("You lose! Computer wins the game!");
        } else {
            alert ("It's a tie!");
        }
     }
    } 
 }  */

  /*   playGame(); */
 
