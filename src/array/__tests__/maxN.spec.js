import { maxN } from '..'

test('maxN', () => {
  expect(maxN([1, 2, 3])).toEqual([3])
})

test('maxN', () => {
  expect(maxN([1, 2, 3], 2)).toEqual([3, 2])
})

test('maxN', () => {
  expect(maxN([], 2)).toEqual([])
})

test('maxN', () => {
  expect(maxN([2, 3, 4, 1], 3)).toEqual([4, 3, 2])
})
