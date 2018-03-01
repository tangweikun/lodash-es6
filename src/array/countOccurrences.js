export const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => a + (v === val), 0)
