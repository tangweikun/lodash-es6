// Creates an array of shuffled values
// TODO:

export const shuffle = nums => {
  const res = []
  const foo = nums.slice(0)
  let i = foo.length - 1
  while (i-- >= 0) {
    res.push(foo.splice(Math.round(Math.random() * i), 1)[0])
  }

  return res
}
