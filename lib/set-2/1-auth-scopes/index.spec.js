const {expect} = require('chai');
const findScopes = require('.');

describe('Set-1: Auth Scopes', () => {
  let scopes;
  let roles;
  let users;

  beforeEach(() => {

    scopes = [
      {id: 1, name: 'login'},
      {id: 2, name: 'update'},
      {id: 3, name: 'delete'}
    ];

    roles = {
      global: {scopes: [scopes[0].id, scopes[1].id, scopes[2].id]},
      user: {scopes: [scopes[0].id]},
      admin: {scopes: [scopes[0].id, scopes[2].id]}
    };

    users = {
      userOne: {scopes: [1, 2]},
      userTwo: {scopes: [1]},
      userThree: {scopes: []},
	  userFour: {scopes: [1,2,3]}
    };

  });


  it('Base Test : Function returns populated array', () => {
    let result = findScopes(users.userOne, roles, scopes);
    expect(result.length).to.be.above(0);
  });


  // Write your correctness tests here
  
  it('Empty Scope Test : Function returns an empty array', () => {
    let result = findScopes(users.userThree, roles, scopes);
    expect(result.length).to.be.equal(0);
  });
  
  it('Single Role : Retuns a populated array', () => {
    let result = findScopes(users.userTwo, roles, scopes);
    expect(result.length).to.be.above(0);
  });
  
  it('All Roles : Retuns a populated array of all roles', () => {
    let result = findScopes(users.userFour, roles, scopes);
    expect(result.length).to.be.above(0);
  });
  
  it('User does not exist Test : Function returns error', () => {
	try {
		let result = findScopes(users.NoExist, roles, scopes);
	}
	catch (err){
		expect(err).to.eql(new Error("user undefined"));
	}
  });
});
