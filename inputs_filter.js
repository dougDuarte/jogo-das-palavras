// FILTRA AS TECLAS PERMITIDAS NOS INPUTS --->

export function keyFilter(event) {
    let keyCode = (event.keyCode ? event.keyCode : event.which)

    if ((keyCode >= 0 && keyCode <= 64) || (keyCode >= 91 && keyCode <= 93) || (keyCode >= 95 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 127)) {
        event.preventDefault()
    }
}