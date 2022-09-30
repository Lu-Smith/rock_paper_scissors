const choices = document.querySelectorAll('button')
const userChoice = document.getElementById('user-choice')
const computerChoice = document.getElementById('computer-choice')
let selectedChoice

choices.forEach(choice => choice.addEventListener('click', (e) => {
    selectedChoice = e.target.id
    userChoice.innerHTML = selectedChoice
    generateComputerChoice()
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