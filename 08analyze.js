  // include the Lo-Dash library
    var _ = require("lodash");

    var analyze = function(freelancers) {
      var result = {
												"average": 1,
												"underperform": [],
												"overperform": []
										};
			var freelancers = _.sortBy(freelancers, 'income');

			var total = _.reduce(freelancers, function (sum, freelancer) {
				return sum + freelancer.income
			}, 0);

			var avg = total / _.size(freelancers);

			result.average = avg;

			_.forEach(freelancers, function (freelancer) {
				if (freelancer['income'] > avg) {
					result.overperform.push(freelancer);
				} else {
					result.underperform.push(freelancer);
				}
			});

			return result;
    };

    // export the worker function as a nodejs module
    module.exports = analyze;


   //    // include the Lo-Dash library
   //  var _ = require("lodash");

   //  var analyze = function(freelancers) {

			// freelancers = _.sortBy(freelancers, 'income');

			// var total = _.reduce(freelancers, function (sum, freelancer) {
			// 	return sum + freelancer.income
			// }, 0);

			// var avg = total / _.size(freelancers);

			// var underperform = _.filter(freelancers, function(freelancer) {
			// 	return freelancer.income <= avg;
			// });

			// var overperform = _.filter(freelancers, function(freelancer) {
			// 	return freelancer.income > avg;
			// });

			// return {
			// 						"average": avg,
			// 						"underperform": underperform,
			// 						"overperform": overperform
			// 				};
   //  };

   //  // export the worker function as a nodejs module
   //  module.exports = analyze;