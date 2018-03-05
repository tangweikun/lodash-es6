export const sortedIndex = (arr, n) => {
  const order = getOrder(arr)
  return order === 0 ? 0 : arr.findIndex(x => order * (x - n) >= 0)
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
