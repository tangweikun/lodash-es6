export const chunk = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (x, i) =>
    arr.slice(i * size, (i + 1) * size),
  )
}
