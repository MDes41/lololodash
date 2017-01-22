// include the Lo-Dash library
	var _ = require("lodash");

	var template = function(user) {
			return _.template('Hello <%= value %> (logins: <%= logins %>)')({ value: user.name, logins: _.size(user.login) });
	};

	// export the template function as a nodejs module
	module.exports = template

// 	────────────────────────────────────────────────────────────────────────────────
//     'use strict';

//     var _ = require("lodash");

//     var template = function (inputvar) {

//         var mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";

//         return _.template(mytemplate)(inputvar);
//     };

//     module.exports = template;

// ────────────────────────────────────────────────────────────────────────────────

// // include the Lo-Dash library
// 	var _ = require("lodash");

// 	var template = function (inputvar) {

// 			var myTemplate = "Hello <%= name %> (logins: <%= login.length %>)";

// 			return _.template(myTemplate)(inputvar);
// 	};

// 	// export the template function as a nodejs module
// 	module.exports = template