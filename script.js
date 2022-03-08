import { INPUTS, SLOTS, initializeInputs, assignSlots } from './create_inputs.js'
import { inputsLogic } from './inputs_logic.js'
import { keyFilter } from './inputs_filter.js'
import { reset } from './reset.js'
import { attemptsTextAndColor, attemptsLogic, attemptsAmount } from './attempts.js'
import { showTip } from './tip.js'
import { gameOver } from './gameover.js'


// INICIALIZAR INPUTS --->

initializeInputs(4)
assignSlots()


// INICIALIZAR TENTATIVAS --->

attemptsTextAndColor()


// DETECTAR INPUT DO USUÁRIO --->

INPUTS.forEach((elem, index) => {
    elem.addEventListener('keypress', keyFilter)

    elem.addEventListener('input', () => {
        inputsLogic(elem, index, INPUTS, SLOTS)
        attemptsLogic(index, SLOTS)
        showTip()
        gameOver(INPUTS, SLOTS)
    })
})


// DETECTAR CLIQUE NO RESET --->

const RESET_BUTTON = document.querySelector('[data-retry]')
RESET_BUTTON.addEventListener('click', reset)