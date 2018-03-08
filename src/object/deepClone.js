// export const deepClone = obj => {
//   const res = {}
//   Object.entries(obj).forEach(([key, value]) => {
//     if (typeof value !== 'object') {
//       Object.assign(res, { key: value })
//     } else {
//       Object.assign(res, deepClone(value))
//     }
//   })
//   return res
// }

export const deepClone = obj => {
  const clone = {}
  Object.entries(clone).forEach(
    ([key, value]) =>
      (clone[key] = typeof value === 'object' ? deepClone(value) : value),
  )

  return clone
}
