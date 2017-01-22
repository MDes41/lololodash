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

  var cart = _.map(reduced_results, function (quanity, article) {
  	return { 'article': parseInt(article, 10), 'total_orders': quanity }
  	});


  return _.sortBy(cart, 'total_orders').reverse()

  };

  // export the worker function as a nodejs module
  module.exports = worker;
  

// ────────────────────────────────────────────────────────────────────────────────
//     'use strict';

//     var _ = require("lodash");

//     var overview = function (orders) {

//         var overviewarray = [],
//             total = 0;

//         // Group by article
//         orders = _.groupBy(orders, 'article');

//         _.forEach(orders, function (item, key) {

//             key = parseInt(key);
//             total = 0;

//             // If only one article
//             if (item.length === 1) {
//                 total = item[0].quantity;

//             // Else make sum of all orders
//             } else {
//                 total = _.reduce(item, function(sum, item) {
//                     return sum + item.quantity;
//                 }, 0);
//             }

//             overviewarray.push({
//                 article: key,
//                 total_orders: total
//             });

//         });

//         // Order
//         overviewarray = _.sortBy(overviewarray, "total_orders").reverse();

//         return overviewarray;
//     };

//     module.exports = overview;

// ────────────────────────────────────────────────────────────────────────────────
