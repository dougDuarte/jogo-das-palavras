const inputLetter1 = document.querySelector('data-letter1')
const inputLetter2 = document.querySelector('data-letter2')
const inputLetter3 = document.querySelector('data-letter3')
const inputLetter4 = document.querySelector('data-letter4')
const inputLetter5 = document.querySelector('data-letter5')
const buttonRetry = document.querySelector('data-retry')

var words = ["Amora", "Urutau", "Tigre", "Arara", "Coral", "Jambo", "Pasto", "Zinco", "Carpo", "Mioma"]

var randomPosition = Math.floor(Math.random() * words.length)
