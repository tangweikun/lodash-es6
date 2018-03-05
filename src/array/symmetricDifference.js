export const symmetricDifference = (a, b) => [
  ...a.filter(x => !b.includes(x)),
  ...b.filter(x => !a.includes(x)),
]
