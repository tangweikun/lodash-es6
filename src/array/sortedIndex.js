export const sortedIndex = (arr, n) => {
  const difference = arr.length <= 1 ? 0 : arr[arr.length - 1] - arr[0]
  return difference === 0 ? 0 : arr.findIndex(x => difference * (x - n) >= 0)
}
