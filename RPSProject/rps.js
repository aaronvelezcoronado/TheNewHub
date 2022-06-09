//Get computers input for game

function computerPlay() {
    let computerPick = Math.floor(Math.random() * 3);
    if (computerPick == 1) {
        return 'hunter'
    } else if (computerPick == 2) {
        return 'ninja'
    } else {
        return 'hippo'
    }
}
//console.log(computerPlay())

const cresult = document.querySelector('.choiceresult');

function playOneRound(playerChoice, computerChoice) {
    if (playerChoice == 'hunter' && computerChoice == 'ninja') {
        console.log(`Player chose ${playerChoice} \n Computer chose ${computerChoice} \n YOU LOST`)
        cresult.textContent = `Player chose hunter,  Computer chose ninja \n YOU LOST`
        return 1
    } else if (playerChoice == 'ninja' && computerChoice == 'hippo') {
        console.log(`Player chose ${playerChoice} \nComputer chose ${computerChoice} \n YOU LOST`)
        cresult.textContent = `Player chose ninja, Computer chose hippo \n YOU LOST`
        return 1
    } else if (playerChoice == 'hippo' && computerChoice == 'hunter') {
        console.log(`Player chose ${playerChoice} \nComputer chose ${computerChoice} \n YOU LOST`)
        cresult.textContent = `Player chose hippo, Computer chose hunter \n YOU LOST`
        return 1
    } else if (playerChoice == computerChoice) {
        console.log(`Player chose ${playerChoice} \nComputer chose ${computerChoice} \n TIE!`)
        cresult.textContent = `Player and computer chose the same! TIE!`
        return 0
    } else {
        console.log(`Player chose ${playerChoice} \n Computer chose ${computerChoice} \n YOU WIN`)
        cresult.textContent = `Player chose ${playerChoice}, Computer chose ${computerChoice} \n YOU WIN`
        return 2
    }
}

let pScore = 0;
let cScore = 0;



const buttons = document.querySelectorAll('button');
const playersScore = document.querySelector('.playerScore')
const computersScore = document.querySelector('.computerScore')
const hmodal = document.querySelector(".modal")
const pmodal = document.querySelector('.modaltext')
var span = document.getElementsByClassName("close")[0];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const gameResult = playOneRound(button.value,computerPlay())
      if (gameResult == 1) {
          cScore++;
        
      } else if (gameResult == 2) {
          pScore++
      } else {
          return;
      }
      playersScore.textContent = pScore;
      computersScore.textContent = cScore;
      if (pScore == 5) {
        pScore = 0;
        cScore = 0;
        pmodal.textContent = 'YOU WIN!';
        hmodal.style.display = "block";
       
      } else if (cScore == 5) {
        pScore = 0;
        cScore = 0;
        pmodal.textContent = 'YOU LOSE!';
        hmodal.style.display = "block";
        


      }
      
    });

  });
  
  span.onclick = function() {
    hmodal.style.display = "none";
  }





/* function game() {
    let playerResult = 0
    let computerResult = 0
    for (let i = 0; i < 5; i++) {
        let playerInput = prompt('Choose rock, paper or scissors!').toLowerCase();
        if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') {
            let computerAnswer = computerPlay();
            let roundResult = playOneRound(playerInput, computerAnswer)
            if (roundResult === 1) {
                computerResult = computerResult + 1
            } else if (roundResult === 2) {
                playerResult = playerResult + 1
            }
        } else {
            alert('Thats not an option')
        }

    }
    if (playerResult > computerResult) {
        console.log('Player Wins!')
    } else if (playerResult < computerResult) {
        console.log('Computer Wins!')
    } else {
        console.log('Its a tie!')
    }


} 

game() */