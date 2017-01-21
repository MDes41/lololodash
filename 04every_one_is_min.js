// We want to sort these towns into two groups: "warm" and "hot". "warm" should
// be towns that have at least one day with a temperature greater than 19. "hot"
// should be towns where the temperature is greater than 19 every day. The result
// should look like this

var _ = require("lodash");

var forEveryOneIsMin = function (city) {
	var result = {
								'hot': [],
								'warm': []
								}

	function check_temp (temp) {
		return temp > 19;
	}


  _.forEach(city, function (temps, cityName) {
  	if (_.every(temps, check_temp)) { 
  		result.hot.push(cityName); 
  	} else if (_.some(temps, check_temp)) {
  		result.warm.push(cityName)
  	}
  });

  return result
};

module.exports = forEveryOneIsMin;
