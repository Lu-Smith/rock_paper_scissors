const choices = document.querySelectorAll('button')
const userChoice = document.getElementById('user-choice')
const computerChoice = document.getElementById('computer-choice')
const result = document.getElementById('result')
let selectedChoice
let generatedComputerChoice
let gameResult

choices.forEach(choice => choice.addEventListener('click', (e) => {
    selectedChoice = e.target.id
    userChoice.innerHTML = selectedChoice
    generateComputerChoice()
    gerResults()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        generatedComputerChoice = 'rock'
    } else if (randomNumber === 2) {
        generatedComputerChoice = 'paper'
    } else {
        generatedComputerChoice = 'scissors'
    }

    computerChoice.innerHTML = generatedComputerChoice
}

function gerResults() {
    if (generatedComputerChoice === selectedChoice) {
        gameResult = "It's a draw"
    } else if (generatedComputerChoice === 'rock' && selectedChoice === 'paper' ||
    generatedComputerChoice === 'paper' && selectedChoice === 'scissors' ||
    generatedComputerChoice === 'scissors' && selectedChoice === 'rock'
    ) {
        gameResult = "You won 🥳"
    } else {
        gameResult = "You lost 😔"
    }
    result.innerHTML = gameResult
}