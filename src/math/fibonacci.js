// export const fibonacci = n => {
//   if (n === 1) return [0]
//   if (n === 2) return [0, 1]

//   return [
//     ...fibonacci(n - 1),
//     fibonacci(n - 1)[n - 3] + fibonacci(n - 1)[n - 2],
//   ]
// }

export const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    [],
  )
