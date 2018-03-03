// FIXME:

export const isSorted = arr => {
  let pre = arr[0]
  let direction = undefined
  for (let i = 1; i < arr.length; i++) {
    if (direction * (pre - arr[i]) > 0) return 0
    if (direction === undefined) {
      if (pre > arr[i]) direction = -1
      if (pre < arr[i]) direction = 1
    }
    pre = arr[i]
  }
  return pre === undefined ? 1 : direction
}
