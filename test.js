// Not added in your HTML file - can you delete this?
fetch('https://restcountries.eu/rest/vs/name/venezuela')
  .then(response => {
    return response.json
  })
  .then(body => console.log(body))
