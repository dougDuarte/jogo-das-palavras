const SQUARES = document.querySelectorAll('input.main-input')

const WORDS = ["amora", "tigre", "arara", "coral", "jambo", "pasto", "zinco", "carpo", "mioma", "vinho", "banho"]
const RANDOM_POSITION = Math.floor(Math.random() * WORDS.length)
const CHOOSEN_WORD = WORDS[RANDOM_POSITION].toUpperCase()

// DECLARAÇÃO DOS OBJETOS
let slot1 = {rightLetter: fillSlot(0), userLetter: '', status: 'empty'}
let slot2 = {rightLetter: fillSlot(1), userLetter: '', status: 'empty'}
let slot3 = {rightLetter: fillSlot(2), userLetter: '', status: 'empty'}
let slot4 = {rightLetter: fillSlot(3), userLetter: '', status: 'empty'}
let slot5 = {rightLetter: fillSlot(4), userLetter: '', status: 'empty'}
const SLOTS = [slot1, slot2, slot3, slot4, slot5]

// ASSOCIA O INDEX DA PALAVRA SORTEADA AO PLACEHOLDER DO QUADRADO (v2.0)
function fillSlot(index) {
    SQUARES[index].placeholder = CHOOSEN_WORD[index]
    return CHOOSEN_WORD[index]
}

// TRIGGERS DO EVENTO DE INPUT (v2.0)
SQUARES.forEach((element, index) => {
    element.addEventListener('input', () => {
        element.value = element.value.toUpperCase()
        SLOTS[index].userLetter = element.value
        testLetter()
        showLog()
        insertColor()
    })
})

// LÓGICA PRINCIPAL DOS ESTADOS
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
                match ? SLOTS[i].status = 'wrongPlace' : SLOTS[i].status = 'wrong'
            }
        }
    }
}

// LÓGICA DAS CORES
function insertColor() {
    for(i in SLOTS) {
        switch(SLOTS[i].status) {
            case 'right':
            SQUARES[i].style.outlineColor = 'green'
            break

            case 'wrongPlace':
            SQUARES[i].style.outlineColor = 'orange'
            break

            case 'wrong':
            SQUARES[i].style.outlineColor = 'red'
            break

            default:
            SQUARES[i].style.outlineColor = '#00000000'
        }
    }
}


// DEBUG
function showLog() {
    console.clear()
    for(i of SLOTS) {
        console.log(i)
    }
}

// FILTRA OS INPUTS PERMITIDOS NOS SQUARES
SQUARES.forEach((element) => {
    element.addEventListener('keypress', function(e){
        let keyCode = (e.keyCode ? e.keyCode : e.which)
        if ((keyCode >= 0 && keyCode <= 64) || (keyCode >= 91 && keyCode <= 93) || (keyCode >= 95 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 127)) {
            e.preventDefault()
        }
    })
})