// returns an object composed from key-value pairs.

export const fromPairs = pairs =>
  pairs.reduce((acc, x) => Object.assign(acc, { [x[0]]: x[1] }), {})
