  // include the Lo-Dash library
    var _ = require("lodash");

    var chainMail = function(words) {
    		return _.chain(words).sort()
    		.map(function(word) {
    				return _.toUpper(word + 'chained')
    			})
    };

    // export the worker function as a nodejs module
    module.exports = chainMail;