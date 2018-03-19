import { sampleSize } from '..'

test('sampleSize', () => {
  console.log(sampleSize([1, 2, 3], 2))
  console.log(sampleSize([1, 2, 3], 3))
  console.log(sampleSize([1, 2, 3], 4))
  console.log(sampleSize([1, 2, 3, 4, 5], 3))
  console.log(sampleSize([1, 2, 3, 4, 5], 4))
})
