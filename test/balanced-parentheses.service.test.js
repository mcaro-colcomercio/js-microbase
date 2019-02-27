'use strict';

// Libraries
should = require('chai').should();
// Imports
const BalancedParentheses = require(
  '../api/services/balanced-parentheses.service'
);

describe('Should Style: Balanced Parentheses', () => {
  it('( should not be balanced', () => {
    let balancedParentheses = new BalancedParentheses();
    balancedParentheses.validate().should.equal(false);
  });
});
