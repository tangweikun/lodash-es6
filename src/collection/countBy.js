// Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
// The corresponding value of each key is the number of times the key was returned by iteratee.
// The iteratee is invoked with one argument: (value).

export const countBy = (arr, fn) => {
  const res = {}
  for (let el of arr) {
    const foo = typeof fn === 'function' ? fn(el) : el[fn]
    res[foo] = ~~res[foo] + 1
  }
  return res
}
