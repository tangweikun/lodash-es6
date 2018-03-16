// Creates an array of grouped elements,
// the first of which contains the first elements of the given arrays,
// the second of which contains the second elements of the given arrays, and so on.
// TODO:
// export const zip = (...arr) => {
//   let maxLength = 0
//   let res = []
//   for (let el of arr) {
//     maxLength = Math.max(maxLength, el.length)
//   }

//   for (let j = 0; j < maxLength; j++) {
//     const foo = []
//     for (let n of arr) {
//       foo.push(n[j])
//     }
//     res.push(foo)
//   }

//   return res
// }

export const zip = (...args) =>
  [...Array(Math.max(...args.map(arr => arr.length)))].map((x, i) =>
    args.map(y => y[i]),
  )
