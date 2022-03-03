const WORDS = [
    {word: 'amor',
    tip: 'O grande segredo da humanidade.'},

    {word: 'figo',
    tip: 'Fruta.'},

    {word: 'casa',
    tip: 'Sonho de consumo da maioria das pessoas.'},

    {word: 'pote',
    tip: 'Usado para guardar coisas.'},

    {word: 'cano',
    tip: 'Essencial no projeto de qualquer residência.'},

    {word: 'sono',
    tip: 'Eu dormi pouco. Estou com: ?'},

    {word: 'capa',
    tip: 'Existem heróis sem ela.'},

    {word: 'mimo',
    tip: 'Presentinho fofinho.'},

    {word: 'nilo',
    tip: 'Uma dádiva do Egito.'},

    {word: 'arte',
    tip: 'Completamente subjetiva e difícil de definir.'}
]

const RANDOM_POSITION = Math.floor(Math.random() * WORDS.length)
const CHOOSEN_WORD = WORDS[RANDOM_POSITION].word.toUpperCase()
let attemptsAmount = 6


// CRIAÇÃO DO INPUT ----->
function createInput() {
    const INPUT_LETTER = document.createElement('input')
    INPUT_LETTER.classList.add('input-letter')
    INPUT_LETTER.setAttribute('type', 'text')
    INPUT_LETTER.setAttribute('maxlength', '1')

    return INPUT_LETTER
}


// DISTRIBUIÇÃO DOS INPUTS ----->
const INPUTS = []

function initializeInputs(count) {
    const CONTAINER_INPUTS = document.querySelector('[data-container-inputs]')

    for(let i = 0; i < count; i++) {
        const INPUT_LETTER = createInput()
        CONTAINER_INPUTS.appendChild(INPUT_LETTER)
        INPUT_LETTER.placeholder = CHOOSEN_WORD[i]
        INPUTS.push(INPUT_LETTER)
    }
}

initializeInputs(4)


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
        testLetter(INPUTS)
        showLog(SLOTS)
        insertColor()
    })
})


// LIMITE DE TENTATIVAS ----->
function attempts(input) {
    const ATTEMPTS = document.querySelector('[data-attempts]')
    const TIP = document.querySelector('[data-tip]')
    const TIP_TEXT = document.querySelector('[data-tip-text]')

    if(attemptsAmount !== 0) {
        attemptsAmount--
        
        if(attemptsAmount !== 1) {
            ATTEMPTS.innerHTML = `<span>[ ${attemptsAmount} ]</span> tentativas restantes`

        } else {
            ATTEMPTS.innerHTML = `<span>[ ${attemptsAmount} ]</span> tentativa restante` 
        }
        
    } else {
        input.forEach(e => e.setAttribute('disabled', 'disabled'))
    }
    
    if(attemptsAmount <= 2) {
        ATTEMPTS.firstChild.classList.add('--warning')
        TIP_TEXT.innerText = WORDS[RANDOM_POSITION].tip
        TIP.classList.remove('--hidden')
    }
}

// RESSETAR TELA ----->
const RESET_BUTTON = document.querySelector('[data-retry]')

function reset() {
    location.reload()
}

RESET_BUTTON.addEventListener('click', reset)


// LÓGICA DOS ESTADOS ----->
function testLetter(input) {
    for(let i = 0; i < SLOTS.length; i++) {

        if(SLOTS[i].userLetter === '') {
            SLOTS[i].status = 'empty'

        } else if (SLOTS[i].userLetter === SLOTS[i].rightLetter) {
            SLOTS[i].status = 'right'

        } else {
            let match = false
            attempts(input) 
            
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


// FILTRA OS INPUTS PERMITIDOS NOS INPUTS ----->
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