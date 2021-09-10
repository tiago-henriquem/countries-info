const searchButton = document.querySelector('.search-button')
const searchInput = document.querySelector('.search-input')

document.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    const inputValue = searchInput.value
    req(inputValue)
  }
})

searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value
  req(inputValue)
})


//https://restcountries.eu/rest/v2/all
//https://restcountries.eu/rest/v2/name/${pais}
//https://restcountries.eu/rest/v2/alpha?codes={code} - pega um array com as infos do code informado (exemplo: BRA, USA)
const req = async (pais) => {
  try {
    const response = await axios.get(`https://restcountries.eu/rest/v2/all`)
    const ourResponse = response.data
    console.log(ourResponse)
    showSearch(ourResponse)
  } catch(e) {
    console.log(e)
  }
}

const showSearch = (response) => {
  const [{name, alpha2Code, region, flag, currencies, population, translations}] = response
  
  const [{code}] = currencies
  const [{br, pt}] = translations
  
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