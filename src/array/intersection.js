export const intersection = (a, b) => a.filter(x => b.includes(x))

// export const intersection = (a, b) => {
//   const s = new Set(b);
//   return a.filter(x => s.has(x));
// };
