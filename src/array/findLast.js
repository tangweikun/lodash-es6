// export const findLast = (arr, fn) => arr.reverse().find(fn)

// export const findLast = (arr, fn) => arr.filter(fn).slice(-1)[0]

export const findLast = (arr, fn) => arr.filter(fn).pop()
