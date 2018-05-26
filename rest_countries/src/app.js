const RestCountries = require('./models/rest_countries.js');
const RestCountriesListView = require('./views/rest_countries_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('#rest-countries');
  const restCountriesListView = new RestCountriesListView(listContainer);
  restCountriesListView.bindEvents();

  const restCountries = new RestCountries;
  restCountries.getData();
})
