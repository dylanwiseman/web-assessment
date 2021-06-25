const restaurants = ["Chubbies","Panda Express","Brookers","Umami","Mo Bettah's","Little Caeser's","Puppy Barn"]
const restBtn = document.querySelector('#rbtn')

const random = () =>  {
    let i = Math.floor(Math.random()*restaurants.length)
    alert(restaurants[i])
}

restBtn.addEventListener('click',random)
