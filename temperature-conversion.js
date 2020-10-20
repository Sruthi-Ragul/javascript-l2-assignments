function convert(degree, unit) {
    var x;
    if (unit === 'Celsius') {
      x = degree * 9 / 5 + 32;
      return x;
   } else {
      x = (degree -32) * 5 / 9;
      return x;
    }
  }
  console.log(convert(100, 'Celsius'));
  console.log(convert(34, 'Celsius'));
