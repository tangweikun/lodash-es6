export const call = (key, ...args) => context => context[key](...args)
