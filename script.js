const inputLetter1 = document.querySelector('data-letter1')
const inputLetter2 = document.querySelector('data-letter2')
const inputLetter3 = document.querySelector('data-letter3')
const inputLetter4 = document.querySelector('data-letter4')
const inputLetter5 = document.querySelector('data-letter5')
const buttonRetry = document.querySelector('data-retry')

var words = ["Amora", "Urutau", "Tigre", "Arara", "Coral", "Jambo", "Pasto", "Zinco", "Carpo", "Mioma"]

var randomPosition = Math.floor(Math.random() * words.length)

function checkInput(evt) {
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
        ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 65 || charCode > 90) &&
        (charCode < 97 || charCode > 122)) {
        return false;
    }
}
