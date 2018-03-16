export const union = (...arr) =>
  Array.from(new Set(arr.reduce((acc, x) => [...acc, ...x], [])))
