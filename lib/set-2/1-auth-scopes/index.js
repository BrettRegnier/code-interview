const _ = require('lodash');

// Complete this function
module.exports = function findScope(user, role, scopes) {
	
	// Check if the user exists first
	if (user == undefined)
		throw new Error("user undefined");
	
	// Check if there are any scopes.
	if (user.scopes[0] == undefined)
		return [];	
	
	var userScopes = [];
	for (var i = 0; i < user.scopes.length; i++)
	{
		var curScope;
		
		// There is two ways I can do this, one is the 'hack' kind of way the other is proper checking
		if (user.scopes[i] == scopes[0].id)
			curScope = scopes[0].name;
		else if (user.scopes[i] == scopes[1].id)
			curScope = scopes[1].name;
		else if (user.scopes[i] == scopes[2].id)
			curScope = scopes[2].name;
		
		// Could be less desireable method (removed form the if statement)
		// userScopes.push(scopes[user.scopes[i] - 1].name);
		
		if (curScope != undefined)
			userScopes.push(curScope);
	}
	
	//console.log(userScopes);
	return userScopes;
};
