// Creates a slice of array with n elements taken from the end.

export const takeRight = (arr, n = 1) =>
  arr.slice(arr.length > n ? arr.length - n : 0, arr.length)
