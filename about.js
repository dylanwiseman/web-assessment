console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted!")
	// console.log('form submit');
}

const compliment = () => {
	alert("You're really strong.")
}

const ducks = document.querySelector('#ducks')
let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
ducks.addEventListener('mouseover', compliment)