const PubSub = require('../helpers/pub_sub.js');
const RestCountriesDetailView = require('./rest_countries_detail_view.js');

const RestCountriesListView = function (container) {
  this.container = container;
};

RestCountriesListView.prototype.bindEvents = function () {
  PubSub.subscribe('RestCountries:countries-ready', (evt) => {
    this.renderRestCountriesDetailViews(evt.detail);
  });
};

RestCountriesListView.prototype.renderRestCountriesDetailViews = function (countries) {
  countries.forEach((country, index) => {
    const countryItem = this.createCountryListItem(country, index);
    this.container.appendChild(countryItem);
  });
};

RestCountriesListView.prototype.createCountryListItem = function (country, index) {
  const restCountriesDetailView = new RestCountriesDetailView();
  const countryDetail = restCountriesDetailView.createRestCountriesDetail(country, index);
  countryDetail.addEventListener('click', (evt) => {
    console.log(evt.target.id)
  })
  // debugger
  return countryDetail;
};

module.exports = RestCountriesListView;
