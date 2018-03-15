// Recursively flatten array up to depth times.

export const flattenDepth = (arr, n = 1) => {
  if (n === 0) return arr

  return arr.reduce(
    (acc, x) =>
      Array.isArray(x) ? [...acc, ...flattenDepth(x, n - 1)] : [...acc, x],
    [],
  )
}
