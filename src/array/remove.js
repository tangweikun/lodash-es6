export const remove = (arr, fn) => {
  const removed = []
  let i = 0

  while (i < arr.length) {
    if (fn(arr[i])) removed.push(...arr.splice(i, 1))
    else i++
  }

  return removed
}
