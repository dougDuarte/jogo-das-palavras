export let attemptsAmount = 6


// DIMINUIÇÃO DAS TENTATIVAS --->

function attemptsSubtract() {
    if(attemptsAmount > 0) {
        attemptsAmount--
    }
}


// TEXTO DAS TENTATIVAS --->

function attemptsText() {
    const ATTEMPTS = document.querySelector('[data-attempts]')

    if(attemptsAmount === 1) {
        ATTEMPTS.innerHTML = `<span>[ ${attemptsAmount} ]</span> tentativa restante`
    } else {
        ATTEMPTS.innerHTML = `<span>[ ${attemptsAmount} ]</span> tentativas restantes`
    }
}


// COR DAS TENTATIVAS --->

function attemptsColor() {
    const ATTEMPTS = document.querySelector('[data-attempts]')
    
    if(attemptsAmount === 0) {
        ATTEMPTS.firstChild.classList.add('--color-wrong')
    } else if(attemptsAmount <= 2) {
        ATTEMPTS.firstChild.classList.add('--color-warning')
    } else {
        ATTEMPTS.firstChild.classList.add('--color-right')
    }
}


// LÓGICA DE TEXTO E COR --->

export function attemptsTextAndColor() {
    attemptsText()
    attemptsColor()
}


// LÓGICA DAS TENTATIVAS --->

export function attemptsLogic(index, slots) {
    if(slots[index].status === 'misplaced' || slots[index].status === 'wrong') {
        attemptsSubtract()
        attemptsTextAndColor()
    }
}