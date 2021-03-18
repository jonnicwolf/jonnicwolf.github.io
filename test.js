
fetch('https://restcountries.eu/rest/vs/name/venezuela')
  .then(response => {
    return response.json
  })
  .then(body => console.log(body))
