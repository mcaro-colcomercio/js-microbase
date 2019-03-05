/* eslint-disable require-jsdoc */
'use strict';

const PARENTHESES = {
  '(': {
    'type': 'round',
    'status': 'open',
  },
  ')': {
    'type': 'round',
    'status': 'close',
  },
  '[': {
    'type': 'square',
    'status': 'open',
  },
  ']': {
    'type': 'square',
    'status': 'close',
  },
};

class BalancedParentheses {
  constructor(data = ')(') {
    this.data = data;
    this.firstData = ')';
    this.lastData = '(';
    this.stack = [];
    this.valid = false;
  }

  validate() {
    this.data = this.matchParentheses(this.data);

    if (this.isEmpty(this.data)) {
      return this.valid;
    }

    this.setFirstAndLast(this.data);

    if (
      this.unbalancedEnds(this.firstData, this.lastData)
    ) {
      return this.valid;
    }

    return this.validateElementByElement();
  }

  matchParentheses(data) {
    return data.match(/\(|\)|\[|\]/g);
  }

  isEmpty(data = null) {
    return !data || data.length === 0;
  }

  setFirstAndLast(data) {
    this.firstData = data[0] || ')';
    this.lastData = data[data.length - 1] || '(';
  }

  unbalancedEnds(first = ')', last = '(') {
    return this.isClose(first) || this.isOpen(last);
  }

  validateElementByElement() {
    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];
      const lastStack = this.stack[this.stack.length - 1];

      this.addToStack(element);

      if (this.isClose(element) && this.stack.length === 0) {
        this.valid = false;
        break;
      }

      if (
        this.isClose(element) &&
        this.stack.length > 0 &&
        this.isSameType(lastStack, element)
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

  addToStack(element) {
    if (this.isOpen(element)) {
      this.stack.push(element);
    }
  }

  isOpen(element) {
    return PARENTHESES[element].status === 'open';
  }

  isClose(element) {
    return PARENTHESES[element].status === 'close';
  }

  isSameType(prev, current) {
    return PARENTHESES[prev].type === PARENTHESES[current].type;
  }
}

module.exports = BalancedParentheses;
