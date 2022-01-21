const WORDS = ["amor", "figo", "casa", "pote", "açaí", "cano", "sono", "capa", "mimo", "nilo", "área", "ação"]
const RANDOM_POSITION = Math.floor(Math.random() * WORDS.length)
const CHOOSEN_WORD = WORDS[RANDOM_POSITION].toUpperCase()


// CRIAÇÃO DOS INPUTS ----->
const INPUTS = []

function createInputs(count) {
    const CONTAINER_INPUTS = document.querySelector('[data-container-inputs]')
    for(let i = 0; i < count; i++) {
        const INPUT_LETTER = document.createElement('input')
        INPUT_LETTER.classList.add('input-letter')
        INPUT_LETTER.setAttribute('type', 'text')
        INPUT_LETTER.setAttribute('maxlength', '1')
        INPUT_LETTER.placeholder = CHOOSEN_WORD[i]
        CONTAINER_INPUTS.appendChild(INPUT_LETTER)
        INPUTS.push(INPUT_LETTER)
    }
}

createInputs(4)


// DECLARAÇÃO DOS OBJETOS ----->
const SLOTS = []

function assignToSquare () {
    for(let i = 0; i < INPUTS.length; i++) {
        SLOTS.push({rightLetter: CHOOSEN_WORD[i], userLetter: '', status: 'empty'})
    }
    showLog(SLOTS)
}

assignToSquare()


// TRIGGERS DO EVENTO DE INPUT ----->
INPUTS.forEach((element, index) => {
    element.addEventListener('input', () => {
        element.value = element.value.toUpperCase()
        SLOTS[index].userLetter = element.value
        testLetter()
        showLog(SLOTS)
        insertColor()
    })
})


// LÓGICA DOS ESTADOS ----->
function testLetter() {
    for(let i = 0; i < SLOTS.length; i++) {

        if(SLOTS[i].userLetter === '') {
            SLOTS[i].status = 'empty'

        } else if (SLOTS[i].userLetter === SLOTS[i].rightLetter) {
            SLOTS[i].status = 'right'

        } else {
            let match = false

            for(let a = 0; a < SLOTS.length; a++) {
                if(SLOTS[a].rightLetter === SLOTS[i].userLetter && SLOTS[a].userLetter !== SLOTS[a].rightLetter && SLOTS[a] !== SLOTS[i]) {
                    match = true
                }
                match ? SLOTS[i].status = 'misplaced' : SLOTS[i].status = 'wrong'
            }
        }
    }
}


// LÓGICA DAS CORES ----->
function insertColor() {
    for(i in SLOTS) {
        switch(SLOTS[i].status) {
            case 'right':
            INPUTS[i].setAttribute('class', 'input-letter --right')
            break

            case 'misplaced':
            INPUTS[i].setAttribute('class', 'input-letter --misplaced')
            break

            case 'wrong':
            INPUTS[i].setAttribute('class', 'input-letter --wrong')
            break

            default:
            INPUTS[i].setAttribute('class', 'input-letter')
        }
    }
}


// FILTRA OS INPUTS PERMITIDOS NOS INPUTS
INPUTS.forEach((element) => {
    element.addEventListener('keypress', function(e){
        let keyCode = (e.keyCode ? e.keyCode : e.which)
        if ((keyCode >= 0 && keyCode <= 64) || (keyCode >= 91 && keyCode <= 93) || (keyCode >= 95 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 127)) {
            e.preventDefault()
        }
    })
})


// DEBUG
function showLog(element) {
    console.clear()
    for(i of element) {
        console.log(i)
    }
}