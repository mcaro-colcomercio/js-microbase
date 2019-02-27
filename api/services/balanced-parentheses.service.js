/* eslint-disable require-jsdoc */
'use strict';

class BalancedParentheses {
  validate(data) {
    return data.length === 2 && data[0] === '(';
  }
}

module.exports = BalancedParentheses;
