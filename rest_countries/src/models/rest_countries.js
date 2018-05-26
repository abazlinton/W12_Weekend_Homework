const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const RestCountries = function () {
  this.restCountriesData = [];

}

RestCountries.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all')
  requestHelper.get((data) => {
    PubSub.publish('RestCountries:countries-ready', data);
  });
}

module.exports = RestCountries;
