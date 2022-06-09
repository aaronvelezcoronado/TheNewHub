//Get computers input for game

function computerPlay() {
    let computerPick = Math.floor(Math.random() * 3);
    if (computerPick == 1) {
        return 'rock'
    } else if (computerPick == 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
//console.log(computerPlay())

function playOneRound(playerChoice, computerChoice) {
    if (playerChoice == 'rock' && computerChoice == 'paper') {
        console.log(`${playerChoice} \n ${computerChoice} \n LOSS`)
        return 1
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        console.log(`${playerChoice} \n ${computerChoice} \n LOSS`)
        return 1
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        console.log(`${playerChoice} \n ${computerChoice} \n LOSS`)
        return 1
    } else if (playerChoice == computerChoice) {
        console.log('It is a tie!')
        return 0
    } else {
        console.log(`${playerChoice} \n ${computerChoice} \n WIN`)
        return 2
    }
}

//console.log(playOneRound('rock','rock'))


function game() {
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

game()