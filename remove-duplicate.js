var arr = ['ABcD', 'abcd', 2, 4, 2, 8, 7, 3, 6];

var result = arr.reduce((result, element) => {
    var normalize = x => typeof x === 'string' ? x.toLowerCase() : x;

    var normalizedElement = normalize(element);
    if (result.every(otherElement => normalize(otherElement) !== normalizedElement))
      result.push(element);

    return result;
  }, []);

console.log(result);