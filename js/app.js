const searchButton = document.querySelector('.search-button')
const searchInput = document.querySelector('.search-input')

searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value
  req(inputValue)
})


//https://restcountries.eu/rest/v2/all
const req = async (pais) => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/all`)
    const ourResponse = await response.data
    /* console.log(ourResponse) */
    console.log(ourResponse)
    showSearch(ourResponse)
  } catch(e) {
    console.log(e)
  }
}

const showSearch = (response) => {
  for(let i in response) {
    const [{flag, name, currencies/* , borders, population, translations, latlng */}] = response
    const [{code}] = currencies

    console.log(flag, name, code)

    const divCards = document.querySelector('.cards')

    const divCountry = document.createElement('div')
    divCountry.setAttribute('class', 'divCountry')

    const cardImg = document.createElement('img')
    cardImg.setAttribute('src', `${flag}`)
    cardImg.setAttribute('class', 'imgCards')

    const cardName = document.createElement('p')
    const text1 = document.createTextNode(name)
    cardName.appendChild(text1)

    const cardCode = document.createElement('p')
    const text2 = document.createTextNode(code)
    cardCode.appendChild(text2)

    divCountry.appendChild(cardImg)
    divCountry.appendChild(cardName)
    divCountry.appendChild(cardCode)
    divCards.appendChild(divCountry)
  }
}

/* const regionSelect = (arr) => {
  const regionSelector = arr.filter((value) => value.region === 'Asia')
  console.log(regionSelector)
  let i = 0
  const showRegion = regionSelector.forEach((country, i, regionSelector) => {
    const [{name, alpha2Code, region, flag}] = country
    return name, alpha2Code, region
  })
  console.log(showRegion)
} */