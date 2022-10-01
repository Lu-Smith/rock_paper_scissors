const choices = document.querySelectorAll('button')
const userChoice = document.getElementById('user-choice')
const computerChoice = document.getElementById('computer-choice')
const result = document.getElementById('result')
let selectedChoice
let generatedComputerChoice
let gameResult

choices.forEach(choice => choice.addEventListener('click', (e) => {
    selectedChoice = e.target.id
    if (selectedChoice  === 'rock') {
        userChoice.innerHTML = '<img src="media/rock.png" class="choiceImages"/>'
    } else if (selectedChoice  === 'scissors') {
        userChoice.innerHTML = '<img src="media/scissors.png" class="choiceImages"/>'
    } else {
        userChoice.innerHTML = '<img src="media/paper.png" class="choiceImages"/>'
    }
    generateComputerChoice()
    gerResults()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        generatedComputerChoice = '<img src="media/rock.png" class="choiceImages"/>'
    } else if (randomNumber === 2) {
        generatedComputerChoice = '<img src="media/paper.png" class="choiceImages"/>'
    } else {
        generatedComputerChoice = '<img src="media/scissors.png" class="choiceImages"/>'
    }

    computerChoice.innerHTML = generatedComputerChoice
}

function gerResults() {
    if (generatedComputerChoice === '<img src="media/rock.png" class="choiceImages"/>' && selectedChoice === 'rock' ||
    generatedComputerChoice === '<img src="media/paper.png" class="choiceImages"/>' && selectedChoice === 'paper' ||
    generatedComputerChoice === '<img src="media/scissors.png" class="choiceImages"/>' && selectedChoice === 'scissors') {
        gameResult = "It's a draw"
    } else if (generatedComputerChoice === '<img src="media/rock.png" class="choiceImages"/>' && selectedChoice === 'paper' ||
    generatedComputerChoice === '<img src="media/paper.png" class="choiceImages"/>' && selectedChoice === 'scissors' ||
    generatedComputerChoice === '<img src="media/scissors.png" class="choiceImages"/>' && selectedChoice === 'rock'
    ) {
        gameResult = "You won 🥳"
    } else {
        gameResult = "You lost 😔"
    }
    result.innerHTML = gameResult
}