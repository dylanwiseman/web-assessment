const colorBtn = document.querySelector("button#color")
const placeBtn = document.querySelector("button#place")
const ritualBtn = document.querySelector("button#ritual")
const complimentForm = document.querySelector("#compliment-field")
const complimentBtn = document.querySelector("#compliment-dylan-btn")

const favoriteColor = (event) => {
    event.preventDefault()
    alert("Dylan's favorite color is yellow")
}
const favoritePlace = (event) => {
    event.preventDefault()
    alert("Dylan's favorite place is Japan")
}
const favoriteRitual = (event) => {
    event.preventDefault()
    alert("Dylan's favorite ritual is putting on lofi music in the morning")
}

function handleCompliment(evt) {
	evt.preventDefault();
	alert("Thanks")
    complimentForm.value = ""
	// console.log('form submit');
}

colorBtn.addEventListener('click',favoriteColor)
placeBtn.addEventListener('click',favoritePlace)
ritualBtn.addEventListener('click',favoriteRitual)
complimentBtn.addEventListener('click',handleCompliment)
complimentForm.addEventListener('submit',handleCompliment)

