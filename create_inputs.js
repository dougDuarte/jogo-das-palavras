export const WORDS = [
    {word: 'amor',
    tip: 'um dos grandes mistérios da humanidade.'},

    {word: 'figo',
    tip: 'fruta com formato que lembra um figo.'},

    {word: 'casa',
    tip: 'sonho de consumo de muitas pessoas.'},

    {word: 'pote',
    tip: 'usado para guardar coisas.'},

    {word: 'cano',
    tip: 'muito utilizado para transportar água.'},

    {word: 'sono',
    tip: 'um bom café resolve esse problema.'},

    {word: 'capa',
    tip: 'existem heróis sem ela.'},

    {word: 'maca',
    tip: 'utilizada para transportar alguém doente.'},

    {word: 'nilo',
    tip: 'uma dádiva do Egito.'},

    {word: 'arte',
    tip: 'é muito subjetiva e difícil de definir.'},

    {word: 'pele',
    tip: 'órgão muito importante.'},

    {word: 'bile',
    tip: 'é produzida pelo fígado.'},

    {word: 'medo',
    tip: 'sentimento importante para autopreservação.'},

    {word: 'fera',
    tip: 'animal feroz.'},

    {word: 'mole',
    tip: 'demonstra falta de solidez.'}
]

export const INPUTS = []
export const SLOTS = []
export const RANDOM_POSITION = Math.floor(Math.random() * (WORDS.length - 0 + 1) ) + 0;
export const CHOSEN_WORD = WORDS[RANDOM_POSITION].word.toUpperCase()


// CRIAÇÃO DO INPUT --->

function createInput() {
    const INPUT_LETTER = document.createElement('input')

    INPUT_LETTER.classList.add('input-letter')
    INPUT_LETTER.setAttribute('type', 'text')
    INPUT_LETTER.setAttribute('maxlength', '1')

    return INPUT_LETTER
}


// DISTRIBUIÇÃO DOS INPUTS --->

export function initializeInputs(count) {
    const CONTAINER_INPUTS = document.querySelector('[data-container-inputs]')

    for(let i = 0; i < count; i++) {
        const INPUT_LETTER = createInput()

        CONTAINER_INPUTS.appendChild(INPUT_LETTER)
        INPUT_LETTER.placeholder = CHOSEN_WORD[i]
        INPUTS.push(INPUT_LETTER)
    }
}


// DECLARAÇÃO DOS OBJETOS --->

export function assignSlots() {
    for(let i = 0; i < INPUTS.length; i++) {
        SLOTS.push({rightLetter: CHOSEN_WORD[i], userLetter: '', status: 'empty'})
    }
}