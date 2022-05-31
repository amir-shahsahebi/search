const getCount = (str) =>
  [...str].filter((st) => [..."aeiou"].includes(st)).length;
console.log(getCount("abracadabra"));
