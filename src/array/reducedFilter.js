export const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(x => keys.reduce((acc, k) => ({ ...acc, [k]: x[k] }), {}))
