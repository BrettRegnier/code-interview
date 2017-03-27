const _ = require('lodash');
const util = require('util')

const finance_key = 'finance_rate_id';
const start_term_key = "start_term";
const end_term_key = "end_term";
const rate_key = "rate"
const values_key = "values";
const uuids_key = "uuids";
const trim_key = "trim_id";

//Value Expand returns an object of objects detailing information on vehicle purchases

// Complete this function
module.exports = function valueExpand(inputObject) 
{	
	// Get the keys of the base objects
	let vehKeys = Object.keys(inputObject);	
	
	// Retrieve all value and finance collections
	let valueCollection = _.map(inputObject, values_key);	
	let financeCollection = _.map(inputObject, uuids_key);

	let parsedData = new Object();
	
	// Loop through the vehicle keys
	for (let i = 0; i < vehKeys.length; i++)
	{
		// The keys of a values of the current vehicle record
		let valKeys = Object.keys(valueCollection[i]);
		
		// Seperate corresponding value and finance record
		let valueObject = valueCollection[i];
		let financeObject = financeCollection[i];
		
		parsedData[vehKeys[i]] = [];
		
		// Loop through all distinct records for each sale
		for (let j = 0; j < valKeys.length; j++)
		{
			let collection = new Object();
			let values = new Object();
			let uuids = new Object();
			
			// Set start and end to the current record's term, and the rate to the record's rate
			values[start_term_key] = valKeys[j];
			values[end_term_key] = valKeys[j];
			values[rate_key] = valueObject[valKeys[j]];
			
			// Set the finance key to the finance's object finance record at the current record
			uuids[finance_key] = financeObject[finance_key][valKeys[j]];
			uuids[trim_key] = financeObject[trim_key];
			
			collection[values_key] = values;
			collection[uuids_key] = uuids;
			
			parsedData[vehKeys[i]].push(collection);
		}
	}

	return parsedData;
};
