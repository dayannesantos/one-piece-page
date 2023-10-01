const buttons = document.querySelectorAll('.button')
const characters = document.querySelectorAll('.character')

function removeSelectedOfButton() {
  const buttonSelected = document.querySelector('.button.selected')
  buttonSelected.classList.remove('selected')
}

function removeSelectedOfCharacter() {
  const characterSelected = document.querySelector('.character.selected')
  characterSelected.classList.remove('selected')
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    removeSelectedOfButton()
    removeSelectedOfCharacter()
    
    button.classList.add('selected')
    characters[index].classList.add('selected')
  })
})


