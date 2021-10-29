const getJoke = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const random_joke = await res.json()
    document.querySelector('.joke').innerText = random_joke.value
    document.querySelector('small').style.display = 'none'
}


