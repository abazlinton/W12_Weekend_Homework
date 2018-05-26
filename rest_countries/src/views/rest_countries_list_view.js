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
  countries.forEach((country) => {
    const countryItem = this.createCountryListItem(country);
    this.container.appendChild(countryItem);
  });
};

RestCountriesListView.prototype.createCountryListItem = function (country) {
  const restCountriesDetailView = new RestCountriesDetailView();
  const countryDetail = restCountriesDetailView.createCountryDetail(country);
  return countryDetail;
};

module.exports = RestCountriesListView;
