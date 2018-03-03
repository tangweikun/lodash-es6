export const longestItem = (...args) =>
  args.reduce((acc, x) => (acc.length < x.length ? x : acc))

// export const longestItem = (...vals) => vals.sort((a, b) => b.length - a.length)[0];
