const choices = document.querySelectorAll('button')
const userChoice = document.getElementById('user-choice')

choices.forEach(choice => choice.addEventListener('click', (e) => {
  console.log(e.target.id);
}))