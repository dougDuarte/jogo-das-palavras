const letterInputs = document.querySelectorAll('input.main-input')
const buttonRetry = document.querySelector('data-retry')

var words = ["Amora", "Tigre", "Arara", "Coral", "Jambo", "Pasto", "Zinco", "Ratão", "Carpo", "Mioma"]
var randomPosition = Math.floor(Math.random() * words.length)
var choosenWordSplit

function associateLetter() {
    choosenWordSplit = words[randomPosition].split('')

    for(let i = 0; i < letterInputs.length; i++) {
        letterInputs[i].placeholder = choosenWordSplit[i]
        console.log(choosenWordSplit[i])
    }
}

letterInputs.forEach((element, index) => {
    element.addEventListener('input', () => {
        if(element.value == choosenWordSplit[index]) {
            element.style.outlineColor = 'green'
        } else if(element.value == '') {
            element.style.outlineColor = '#00000000'
        } else {
            element.style.outlineColor = 'red'
        }

        letterExists(element, index)
    })
})

function letterExists(element, index) {
    for(let i = 0; i < choosenWordSplit.length; i++) {
        if(element.value == choosenWordSplit[i] && index != i) {
            element.style.outlineColor = 'orange'
        } 
    }
}

associateLetter()

letterInputs.forEach((element) => {
    element.addEventListener('keypress', function(e){
        let keyCode = (e.keyCode ? e.keyCode : e.which)
        if ((keyCode >= 0 && keyCode <= 64) || (keyCode >= 91 && keyCode <= 93) || (keyCode >= 95 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 127)) {
            e.preventDefault()
        }
    })
})

