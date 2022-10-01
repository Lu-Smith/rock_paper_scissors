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

// title

const rockTitle = document.getElementById('rockTitle');
const paperTitle = document.getElementById('paperTitle');
const scissorsTitle = document.getElementById('scissorsTitle');
const strRockTitle = rockTitle.textContent;
const strPaperTitle = paperTitle.textContent;
const strScissorsTitle = scissorsTitle.textContent;
const splitRockTitle = strRockTitle.split("");
const splitPaperTitle = strPaperTitle.split("");
const splitScissorsTitle = strScissorsTitle.split("");
rockTitle.textContent = "";
paperTitle.textContent = "";
scissorsTitle.textContent = "";

for (let i = 0; i < splitRockTitle.length; i++) {
    rockTitle.innerHTML += "<span class='start-color-rock'>" + splitRockTitle[i] + "</span>";
}

for (let i = 0; i < splitPaperTitle.length; i++) {
    paperTitle.innerHTML += "<span class='start-color-paper'>" + splitPaperTitle[i] + "</span>";
}

for (let i = 0; i < splitScissorsTitle.length; i++) {
    scissorsTitle.innerHTML += "<span class='start-color-scissors'>" + splitScissorsTitle[i] + "</span>";
}

let charRock = 0;
let charPaper = 0;
let charScissors = 0;
let timer = setInterval(onTick, 200);
let timerScissors = setInterval(onTickScissors, 200);

function onTick(){
    const spansRock = rockTitle.querySelectorAll('.start-color-rock')[charRock];
    const spansPaper = paperTitle.querySelectorAll('.start-color-paper')[charPaper];

    spansRock.classList.add('end-color-rock');
    spansPaper.classList.add('end-color-paper');

    charRock++
    charPaper++

    if(charRock === splitRockTitle.length) {
        completeRock();
        return;
    }
    if(charPaper === splitPaperTitle.length) {
        completePaper();
        return;
    }
}

function onTickScissors(){

    const spansScissors = scissorsTitle.querySelectorAll('.start-color-scissors')[charScissors];
   
    spansScissors.classList.add('end-color-scissors');

    charScissors++

    if(charScissors === splitScissorsTitle.length) {
        completeScissors();
        return;
    }
}

function completeRock() {
    clearInterval(timer);
    timer = null;
}

function completePaper() {
    clearInterval(timer);
    timer = null;
}

function completeScissors() {
    clearInterval(timerScissors);
    timerScissors = null;
}