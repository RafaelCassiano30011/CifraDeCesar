const $input = document.querySelector('.input')
const $inputNumber = document.querySelector('.input-number')
const $span = document.querySelector('.span-cesar')
const $button = document.querySelector('.button')


const chacteres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

$button.addEventListener('click', () => {
    let frase = $input.value.toLowerCase()
    let number = parseInt($inputNumber.value)

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] != '') {
            for (let x = 0; x < chacteres.length; x++) {
                if (frase[i] == chacteres[x]) {
                    a
                }
            }
        }
    }
})