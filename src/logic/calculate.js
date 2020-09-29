import operate from './operate';

function calculate(dataObj, button) {
  let { total, next, operation } = dataObj;
  const operations = ['+', '-', 'X', '%', '÷'];
  if (button === 'AC' || total === '∞') {
    total = null;
    next = null;
    operation = null;
  } else if (button === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  } else if (operations.includes(button)) {
    if (button === '%') {
      if (!next) {
        next = total;
      }
      operation = button;
      total = operate(null, next, operation);
      next = null;
      operation = null;
    } else if (total && next && operation) {
      total = operate(total, next, operation);
      operation = button;
      next = null;
    } else if (next && !operation) {
      total = next;
      operation = button;
      next = null;
    } else {
      operation = button;
    }
  } else if (button === '+/-') {
    if (next) {
      next = operate(next, '-1', 'X');
    } else if (total) {
      total = operate(total, '-1', 'X');
    }
  } else if (next === null && operation === null && total) {
    next = button;
    total = null;
  } else if (next) {
    if (button !== '.' || (button === '.' && next.indexOf(button) < 0)) {
      next = next.concat(button);
    }
  } else {
    next = button;
  }
  return {
    total,
    next,
    operation,
  };
}

export default calculate;
