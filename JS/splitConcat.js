const spacify = (terms) => {
  let newTerm = "";

  terms.split("").map((term) => (newTerm += term + " "));
  return newTerm.trim();
};
const spacify2 = (terms) => terms.split("").join(" ");
// console.log("Hi", spacify("ali"));
console.log(spacify2("ali"), "Hi");
