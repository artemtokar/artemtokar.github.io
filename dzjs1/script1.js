
var x = +prompt('Введите число', '');

var n = +prompt('Введите степень', '');

function pow(x, n) {
  var result = 1;
    if ((x === 0) && (n !== 0)) {
        return 0;

    } else if ((x !== 0) && (n === 0)) {
        return 1;

    } else if ((x === 0) && (n === 0)) {
        return 'error';
} else if (n < 0) {
  for ( var i = 0; i < (-1 * n); i++) {
 console.log(i);
  result *= x;
 console.log(result);
}
  var minus = 1 / result;

  return minus;
} else {
  var result = x;

  for ( var i = 1; i < n; i++ ) {
    console.log(i);
      result *= x;
    console.log(result);
  }
  return result;
}
}
console.log('result is', pow(x, n));
console.log('x=', x);
console.log('n=', n);
console.log('result of Math.pow', Math.pow(x, n));
