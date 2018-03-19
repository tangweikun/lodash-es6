// Gets n random elements at unique keys from collection up to the size of collection.

// TODO:

export const sampleSize = (nums, n = 1) => {
  const foo = [...nums]
  const len = n > nums.length ? nums.length : n

  let res = []
  for (let i = 0; i < len; i++) {
    res.push(...foo.splice(Math.round(Math.random() * (len - 1 - i)), 1))
  }
  return res
}
