export const groupBy = (arr, fn) =>
  arr.reduce((acc, x) => {
    const foo = typeof fn === 'function' ? fn(x) : x[fn]
    acc[foo] = (acc[foo] || []).concat(x)
    return acc
  }, {})

// export const groupBy = (arr, fn) =>
//   arr.map(typeof fn === 'function' ? fn : x => x[fn]).reduce((acc, val, i) => {
//     acc[val] = (acc[val] || []).concat(arr[i])
//     return acc
//   }, {})
