/* eslint no-unused-expressions:0 */
const {expect} = require('chai');
const requestResults = require('.');

describe('Set-2: Promise Me', () => {

  beforeEach(() => {});

  it('Base Test : Ensure array is not empty', () => {

    return requestResults().then(results => {
      expect(results).to.not.be.empty;
    });

  });

  // Write your correctness tests here
  
	it('Return Object Test : Ensure an object of requests is returned', () => {
		return requestResults().then(results => {
			expect(results).to.be.object;
		});
	});
	
	it('Correct Array Returned Test : ensure the returned array is correct', () => {
		return requestResults().then(results => {			
			expect(results).to.eql([1, 2]);
		});
	});

});
