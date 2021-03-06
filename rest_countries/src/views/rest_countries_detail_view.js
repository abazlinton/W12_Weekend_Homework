const RestCountriesDetailView = function () {

}

RestCountriesDetailView.prototype.createRestCountriesDetail = function (country, index) {
  const countryDetail = document.createElement('div');
  countryDetail.classList.add('country-detail');

  const name = document.createElement('h3');
  name.id = index
  name.textContent = country.name;
  countryDetail.appendChild(name);

  // countryDetail.appendChild(detailsList);
  return countryDetail;
};

RestCountriesDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};

module.exports = RestCountriesDetailView;
