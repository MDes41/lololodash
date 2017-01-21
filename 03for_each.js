var _ = require("lodash");

var forEachPop = function (collection) {
  return _.forEach(collection, function(city) {
  	if (city.population > 1) {
  		city.size = 'big';
  	} else if (city.population > 0.5) {
  		city.size = 'med';
  	} else {
  		city.size = 'small';
  	}
  });
};

module.exports = forEachPop;
