// This method is like _.uniq except that it accepts iteratee which is invoked for each element in array
// to generate the criterion by which uniqueness is computed.
// The order of result values is determined by the order they occur in the array.

// TODO: Make code less
// export const uniqBy = (arr, fn) => {
//   let res = []
//   const hash = new Set()
//   for (let i = 0; i < arr.length; i++) {
//     const foo = typeof fn === 'function' ? fn(arr[i]) : arr[i][fn]
//     if (!hash.has(foo)) {
//       res.push(arr[i])
//       hash.add(foo)
//     }
//   }
//   return res
// }

export const uniqBy = (arr, fn, set = new Set()) =>
  arr.filter(el =>
    (v => !set.has(v) && set.add(v))(
      typeof fn === 'function' ? fn(el) : el[fn],
    ),
  )
