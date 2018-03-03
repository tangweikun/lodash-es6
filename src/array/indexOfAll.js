// export const indexOfAll = (arr, val) =>
//   arr.reduce((acc, x, i) => {
//     if (x === val) acc.push(i)
//     return acc
//   }, [])

export const indexOfAll = (arr, val) => {
  const indices = []
  arr.forEach((el, i) => el === val && indices.push(i))
  return indices
}
