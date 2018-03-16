// Removes elements from array corresponding to indexes and returns an array of removed elements.

export const pullAt = (arr, indexes) =>
  indexes.reduce((acc, x, i) => [...acc, ...arr.splice(x - i, 1)], [])
