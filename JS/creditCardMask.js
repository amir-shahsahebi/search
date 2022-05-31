const maskify = (str) =>
  str.length > 4 ? "#".repeat(str.length - 4).concat(str.slice(-4)) : str;

console.log(maskify("4556364607935616"), "############5616");
console.log("#".repeat(4));
console.log("#545488888888".slice(-4));
