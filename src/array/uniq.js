// Creates a duplicate-free version of an array, using SameValueZero for equality comparisons,
// in which only the first occurrence of each element is kept.
// The order of result values is determined by the order they occur in the array.

export const uniq = arr => Array.from(new Set(arr))
