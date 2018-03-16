import { union } from '..'

test('union', () => {
  expect(union([], [])).toEqual([])
})

test('union', () => {
  expect(union([2, 1, 2], [2, 3], [4])).toEqual([2, 1, 3, 4])
})

test('union', () => {
  expect(union([1, 2], [2, 2], [1])).toEqual([1, 2])
})
