export const pull = (arr, ...args) => {
  for (let i = 0; i < arr.length; i++) {
    if (args.includes(arr[i])) {
      arr.splice(i, 1)
      i--
    }
  }
}
