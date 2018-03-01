export const filterNonUnique = arr =>
  arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
