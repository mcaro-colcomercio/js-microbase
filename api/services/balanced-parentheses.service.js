/* eslint-disable require-jsdoc */
'use strict';

class BalancedParentheses {
  validate(data) {
    return this.beginWithOpenParentheses(data) &&
      this.pair(data);
  }

  beginWithOpenParentheses(data) {
    return data[0] === '(';
  }

  pair(data) {
    return data.length % 2 === 0;
  }
}

module.exports = BalancedParentheses;
