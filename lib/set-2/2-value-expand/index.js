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
	let valueCollection = _.map(inputObject, values_key);	
	let financeCollection = _.map(inputObject, uuids_key);

	let parsedData = new Object();
	
	// Loop through the vehicle keys
	for (let i = 0; i < vehKeys.length; i++)
	{
		let valKeys = Object.keys(valueCollection[i]);
		
		parsedData[vehKeys[i]] = [];
		for (let j = 0; j < valKeys.length; j++)
		{
			let collection = new Object();
			let values = new Object();
			let uuids = new Object();
			
			values[start_term_key] = valKeys[0];
			values[end_term_key] = valKeys[0];
			values[rate_key] = valueCollection[i][valKeys[j]];
			
			uuids[finance_key] = financeCollection[i][finance_key][valKeys[j]];
			uuids[trim_key] = financeCollection[i][trim_key];
			
			collection[values_key] = values;
			collection[uuids_key] = uuids;
			
			parsedData[vehKeys[i]].push(collection);
			//collection 
		}
	}
	//console.log(util.inspect(parsedData, {showHidden: false, depth: null}));

	return parsedData;
};
