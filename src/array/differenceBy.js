export const differenceBy = (a, b, fn) =>
  Array.from({ length: Math.max(a.length, b.length) }).reduce(
    (res, x, i) => (fn(a[i]) === fn(b[i]) ? res : [...res, i]),
    [],
  )
