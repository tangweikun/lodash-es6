// Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.

export const union = (...arr) =>
  Array.from(new Set(arr.reduce((acc, x) => [...acc, ...x], [])))
