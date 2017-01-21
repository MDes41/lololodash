  // include the Lo-Dash library
  var _ = require("lodash");

  var worker = function(orders) {

  var reduced_results = _.reduce(
        orders,
        function(result, order) {
        	if (result[order.article]) {
        		result[order.article] += order.quantity;
        	} else {
            result[order.article] = order.quantity;
        	}
          return result;
        },
        {}
    );

function sort_quanity function(quantity, article) {
	return { 'article': parseInt(article, 10), 'total_orders': quanity };
};

  var cart = _.map(reduced_results, sort_quanity);


  return _.sortBy(cart, 'total_orders').reverse()

  };

  // export the worker function as a nodejs module
  module.exports = worker;


    //   // include the Lo-Dash library
    // var _ = require("lodash");

    // var worker = function(orders) {
    //     _.chain(orders)
    //     .reduce(function (result, order) {
    //     	if (result[order.article]) {
    //     		result[order.article] += order.quantity;
    //     	}
    //     	else {
    //     		result[order.article] = order.quantity;
    //     	}
    //     	return result;
    //     },
    //     {}
    //     )
    //     .map(function (quantity, article) {
    //     	return { 'article': parseInt(article, 10), 'total_orders': quantity }
    //     })
    //     .sortBy('total_orders')
    //     .reverse()
    // };

    // // export the worker function as a nodejs module
    // module.exports = worker;