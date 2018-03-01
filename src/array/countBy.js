export const countBy = (arr, fn) => {
  return arr
    .map(typeof fn === 'function' ? fn : x => x[fn])
    .reduce((acc, val) => {
      acc[val] = ~~acc[val] + 1
      return acc
    }, {})
}
