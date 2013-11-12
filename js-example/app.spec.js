describe('add', function () {
  it('should add two numbers', function () {
    expect(add(1, 2)).toBe(3);
  });

  it('should negative numbers', function () {
    expect(add(1, -2)).toBe(-1);
  });

  it('should throw if you pass in non-numbers', function () {
    expect(function () {
      add(1, 'baseball');
    }).toThrow();
  });
});

describe('makeRed', function () {
  it('should make an element red', function () {
    var element = document.createElement('div');
    makeRed(element);
    expect(element.style.color).toBe('red');
  });
});

