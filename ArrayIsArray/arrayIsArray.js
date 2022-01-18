let pairsByIndex = pairsByIndexRaw.filter(
  (el) =>
    Array.isArray(el) &&
    el.length === 2 &&
    Number.isInteger(el[0]) &&
    Number.isInteger(el[1])
);
// Very Important:
// if the first of && characters is false, then in continue the chain with other true values