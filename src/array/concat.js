export const concat = (...args) =>
  args.reduce((acc, x) => (Array.isArray(x) ? [...acc, ...x] : [...acc, x]), [])
