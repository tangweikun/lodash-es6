// Creates an object composed of keys generated from the results of running each element of collection thru iteratee.
// The order of grouped values is determined by the order they occur in collection.
// The corresponding value of each key is an array of elements responsible for generating the key.
// The iteratee is invoked with one argument: (value).

export const groupBy = (arr, fn = x => x) =>
  arr.reduce((res, el) => {
    const foo = typeof fn === 'function' ? fn(el) : el[fn]
    res[foo] = res[foo] || []
    res[foo].push(el)
    return res
  }, {})
