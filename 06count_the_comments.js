// include the Lo-Dash library
  var _ = require("lodash");

  var countTheComments = function(users) {

  	var result = []

  	var grouped = _.groupBy(users, 'username')

  	_.forEach(grouped, function(comments, name) {
  		result.push(
  								{'username': name, 
  								'comment_count': _.size(comments)
  							});
  	});


	  return _.sortBy(result, "comment_count").reverse();

	  // return _.chain(users)
	  // .groupBy('username')
	  // .map(function(comments, name) {
	  // 	return {'username': name, 'comment_count': _.size(comments)};
	  // })
	  // .sortBy(function(counted) {
	  // 	return -counted['comment_count']
	  // })

  };



  // export the worker function as a nodejs module
  module.exports = countTheComments;
