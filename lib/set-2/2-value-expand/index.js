const _ = require('lodash');
const util = require('util')

const idAttribute = 'finance_rate_id';
const start_term_name = "start_term";
const end_term_name = "end_term";
const rate_name = "rate"

// Complete this function
module.exports = function valueExpand(inputObject) 
{	
	// Get the keys of the base objects
	var vehKeys = Object.keys(inputObject);
	
	// Get the keys to avoid long lines
	var valuidKeys = Object.keys(inputObject[vehKeys[0]]);
	var uuidsKeys = Object.keys(inputObject[vehKeys[0]][valuidKeys[1]]);
	
	var parsedData = new Object();
	
	for (var i = 0; i < vehKeys.length; i++)
	{
		// The object holding the value and uuids objects
		var valUuids = inputObject[vehKeys[i]];
		
		// The macro objects value and uuid
		var valueObjects = valUuids[valuidKeys[0]];
		var uuidObjects = valUuids[valuidKeys[1]];
		
		// The keys for values ex "24" or "36"
		var valKeys = Object.keys(valueObjects);
		
		// The Keys to hold "finance_rate_id" and "trim_id" 
		var uuidKeys = Object.keys(uuidObjects);
		
		// The objects held in "finance_rate_id" object
		var finance_rate = uuidObjects[uuidKeys[0]];
		var finance_rate_keys = Object.keys(finance_rate);
		
		// Fill the object with empty arrays.
		parsedData[vehKeys[i]] = [];
		
		
		for (var j = 0; j < valKeys.length; j++)
		{
			var collection = new Object();
			var values = new Object();
			var uuids = new Object();
			
			// The start of the term is equal to the keys in the value object
			values[start_term_name] = valKeys[j];
			
			// It could be either the key of the value object or the finance_rate
			values[end_term_name] = finance_rate_keys[j];
			
			// The value the key in values point to.
			values[rate_name] = valueObjects[valKeys[j]];
			
			// Sets the finance rate id "finance_rate_id"
			uuids[uuidKeys[0]] = finance_rate[finance_rate_keys[j]];
			
			// Sets the trim_id to the "trim_id"
			uuids[uuidKeys[1]] = uuidObjects[uuidKeys[1]];
			
			// Puts the value and uuids objects into the collection
			collection[valuidKeys[0]] = values;
			collection[valuidKeys[1]] = uuids
			
			// Puts the object into the array for each different car rate.
			parsedData[vehKeys[i]].push(collection);
		}
	}
	
	
	
	//console.log(util.inspect(parsedData, {showHidden: false, depth: null}));
	
	return parsedData;
};
