export const findLastIndex = (arr, fn) =>
  arr.length - 1 - ~~arr.reverse().findIndex(fn)
