export const difference = (a, b) =>
  Array.from({ length: Math.max(a.length, b.length) }).reduce(
    (res, x, i) => (a[i] === b[i] ? res : [...res, i]),
    [],
  )
