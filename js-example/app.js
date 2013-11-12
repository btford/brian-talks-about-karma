function add (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('we can only add numbers');
  }
  return a + b;
}

function makeRed (element) {
  element.style.color = 'red';
}
