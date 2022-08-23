const mainBtn = document.querySelector('.main-btn')
const phraseP = document.querySelector('.phrase-p')
const apiUrl = 'https://uselessfacts.jsph.pl/random.json?language=en'

async function fetchPhrase() {
  const response = await fetch(apiUrl)
  let data = await response.json()
  phraseP.textContent = data.text
}

mainBtn.addEventListener('click', fetchPhrase)