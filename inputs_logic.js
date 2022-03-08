// LÓGICA DOS ESTADOS --->

function testInputsLetters(inputs, slots) {
    for(let i = 0; i < slots.length; i++) {

        if(slots[i].userLetter === '') {
            slots[i].status = 'empty'

        } else if (slots[i].userLetter === slots[i].rightLetter) {
            slots[i].status = 'right'
            blockInput(inputs[i])

        } else {
            let match = false
            
            for(let a = 0; a < slots.length; a++) {

                if(slots[a].rightLetter === slots[i].userLetter && slots[a].userLetter !== slots[a].rightLetter && slots[a] !== slots[i]) {
                    match = true
                }

                match ? slots[i].status = 'misplaced' : slots[i].status = 'wrong'
            }
        }
    }
}


// LÓGICA DAS CORES --->

function inputsColor(inputs, slots) {
    for(let i in slots) {
        switch(slots[i].status) {
            case 'right':
            inputs[i].setAttribute('class', 'input-letter --letter-right')
            break

            case 'misplaced':
            inputs[i].setAttribute('class', 'input-letter --letter-misplaced')
            break

            case 'wrong':
            inputs[i].setAttribute('class', 'input-letter --letter-wrong')
            break

            default:
            inputs[i].setAttribute('class', 'input-letter')
        }
    }
}

export function inputsLogic(elem, index, inputs, slots) {
    elem.value = elem.value.toUpperCase()
    slots[index].userLetter = elem.value

    testInputsLetters(inputs, slots)
    inputsColor(inputs, slots)
}

// BLOQUEAR UM INPUT --->

export function blockInput(elem) {
    elem.setAttribute('disabled', 'disabled')
}