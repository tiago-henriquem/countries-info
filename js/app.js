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
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${pais}`)
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



  const [{br, pt}] = translations //if(br=== null) {exibe pt} else exibe br
/*const [{currencies.code: currency}] = response
  ----
  const felipe = currencies[0].code
  console.log(felipe); */
  console.log(name, alpha2Code, region, flag, code)

  const divCards = document.querySelector('.newCards')

  const cardName = document.createElement('p')
  let text = document.createTextNode(name)
  cardName.appendChild(text)
  
  const cardAlpha2Code = document.createElement('p')
  text = document.createTextNode(alpha2Code)
  cardAlpha2Code.appendChild(text)

  const cardRegion = document.createElement('p')
  text = document.createTextNode(region)
  cardRegion.appendChild(text)

  const cardImg = document.createElement('img')
  cardImg.setAttribute('src', `${flag}`)

  divCards.appendChild(cardImg)
  divCards.appendChild(cardName)
  divCards.appendChild(cardAlpha2Code)
  divCards.appendChild(cardRegion)
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