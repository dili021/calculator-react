import Big from 'big.js';

function operate(numOne, numTwo, operation) {
  if (operation === '+') {
    return Big(numOne).plus(Big(numTwo));
  }
  if (operation === '-') {
    return Big(numOne).minus(Big(numTwo));
  }
  if (operation === '÷') {
    if (numTwo !== '0') {
      return Big(numOne).div(Big(numTwo));
    }
    return '∞';
  }
  if (operation === 'X') {
    return Big(numOne).times(Big(numTwo));
  }
  if (numOne === null) {
    return Big(numTwo).times(0.01);
  }
  return Big(numOne).times(Big(numTwo).times(0.01));
}

export default operate;
