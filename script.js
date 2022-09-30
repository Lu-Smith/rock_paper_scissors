const choices = document.querySelectorAll('button')
const userChoice = document.getElementById('user-choice')
let selectedChoice

choices.forEach(choice => choice.addEventListener('click', (e) => {
    selectedChoice = e.target.id
    userChoice.innerHTML = selectedChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)
}