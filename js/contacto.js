const modal = document.querySelector(".modal-cerveux")
const store = document.querySelector("#mail-form")
const formInputs = document.querySelectorAll("input")
const textArea = document.querySelector("textarea")

const toggleModal = ()=>{
    modal.classList.toggle("is-open")

}

const eraseTextValue = ()=>{
    textArea.value = ""

}

const eraseInputValue = () => {
    formInputs.forEach(input => {
        input.value = ""
    })
}


store.addEventListener("submit", (e)=>{
    e.preventDefault()
    eraseInputValue()
    eraseTextValue()
    toggleModal()
})

const stopEventPropagation = (e) => {
    e.stopPropagation()
}