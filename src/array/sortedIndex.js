export const sortedIndex = (arr, n) => {
  const order = getOrder(arr)
  if (order === 0) return 0

  for (let j = 0; j < arr.length; j++) {
    if (order * (arr[j] - n) >= 0) return j
  }
}

const getOrder = arr => {
  let i = 1

  while (i < arr.length) {
    if (arr[i] > arr[i - 1]) return 1
    if (arr[i] < arr[i - 1]) return -1
    i++
  }

  return 0
}
