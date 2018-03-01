// export const deepFlatten = arr =>
//   arr.reduce(
//     (res, x) => (Array.isArray(x) ? [...res, ...deepFlatten(x)] : [...res, x]),
//     [],
//   )

export const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))
