/* eslint-disable require-jsdoc */
'use strict';

class BalancedParentheses {
  constructor(data) {
    this.data = data;
    this.stack = [];
    this.valid = false;
  }

  validate() {
    if (this.isEmpty()) {
      return this.valid;
    }

    this.cleanNonParentheses();

    if (
      this.isClose(this.data[0]) ||
      this.isOpen(this.data[this.data.length - 1])
    ) {
      return this.valid;
    }

    return this.validateByElement();
  }

  isEmpty() {
    return this.data.length === 0;
  }

  cleanNonParentheses() {
    this.data = this.data.match(/\(|\)|\[|\]/g);
  }

  validateByElement() {
    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];

      if (this.isOpen(element)) {
        this.stack.push(element);
      }

      if (this.isClose(element) && this.stack.length === 0) {
        this.valid = false;
        break;
      }

      if (
        this.isClose(element) &&
        this.stack.length > 0 &&
        this.isSameType(this.stack[this.stack.length - 1], element)
      ) {
        this.stack.pop();
      } else if (
        this.isClose(element) &&
        !this.isSameType(this.stack[this.stack.length - 1], element)
      ) {
        break;
      }

      if (this.stack.length === 0) {
        this.valid = true;
      };
    }

    return this.valid;
  }

  isOpen(element) {
    return element === '(' || element === '[';
  }

  isClose(element) {
    return element === ')' || element === ']';
  }

  isSameType(prev, current) {
    return this.whoIs(prev) === this.whoIs(current);
  }

  whoIs(current) {
    switch (current) {
      case '(':
        return 'round';
      case ')':
        return 'round';
      case '[':
        return 'square';
      case ']':
        return 'square';
      default:
        return null;
    }
  }
}

module.exports = BalancedParentheses;
