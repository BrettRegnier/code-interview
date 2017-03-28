const _ = require('lodash');

// Complete this function

// Find scope takes in a user, their role, and applicable scopes and returns a list of the user's scopes
// Params: user - user to be checked, role - Not sure, scopes - all of the available scopes
// Return: Retuns a list of scopes applied to the user
module.exports = function findScope(user, role, scopes) 
{
	console.log(role);
	// Check if the user exists
	if (user == undefined)
		throw new Error("user undefined");
	
	// Return an empty array if there is no scopes
	if (user.scopes[0] == undefined)
		return [];	
	
	let userScopes = [];
	for (let i = 0; i < user.scopes.length; i++)
	{
		let curScope;
		
		// There is two ways I can do this, one is the 'hack' kind of way the other is proper checking
		if (user.scopes[i] == scopes[0].id)
			curScope = scopes[0].name;
		else if (user.scopes[i] == scopes[1].id)
			curScope = scopes[1].name;
		else if (user.scopes[i] == scopes[2].id)
			curScope = scopes[2].name;
		
		// Could be less desireable method (removed the if statement)
		// userScopes.push(scopes[user.scopes[i] - 1].name);
		
		if (curScope != undefined)
			userScopes.push(curScope);
	}
	
	return userScopes;
};
