

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const canvas = document.querySelector("#confetti");


buttons.forEach(button => {
    button.addEventListener("click", function() {
        if (humanScore < 5 && computerScore <5) {
        const humanChoice = this.getAttribute("class");
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        checkWinner();  
        }
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


function checkWinner() {
    if (humanScore === 5) {
        results.innerHTML += "<br>You win the game!";
        disableButtons();
        confetti();
    } else if (computerScore === 5) {
        results.innerHTML += "<br>Compuer wins the game 😭";
      disableButtons();
    }
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
                  });
}


function confetti() {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
}