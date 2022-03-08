import { WORDS, RANDOM_POSITION } from './create_inputs.js'
import { attemptsAmount } from './attempts.js'

export function showTip() {
    const TIP = document.querySelector('[data-tip]')
    const TIP_TEXT = document.querySelector('[data-tip-text]')

    if(attemptsAmount === 2) {
        TIP_TEXT.innerText = WORDS[RANDOM_POSITION].tip
        TIP.classList.remove('--hidden')
    }
}

export function hideTip() {
    const TIP = document.querySelector('[data-tip]')

    TIP.classList.add('--hidden')
}