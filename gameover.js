import { blockInput } from './inputs_logic.js'
import { CHOSEN_WORD } from './create_inputs.js'
import { attemptsAmount } from './attempts.js'
import { hideTip } from './tip.js'


// FINAL DO JOGO --->

export function gameOver(inputs, slots) {
    const RESULT = document.querySelector('[data-result]')

    if(attemptsAmount === 0) {
        inputs.forEach(elem => blockInput(elem))

        RESULT.innerHTML = `<span>Você perdeu :(</span><br>A palavra correta era ${CHOSEN_WORD}`
        RESULT.classList.remove('--hidden')
        RESULT.classList.add('--color-wrong')

        hideTip()
    }

    if(slots.every(elem => elem.status === 'right')) {
        inputs.forEach(elem => blockInput(elem))

        RESULT.innerHTML = `<span>Correto!</span><br>Parabéns, você venceu :D`
        RESULT.classList.remove('--hidden')
        RESULT.classList.add('--color-right')

        hideTip()
    }
}