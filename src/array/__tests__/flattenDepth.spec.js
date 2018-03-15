import { flattenDepth } from '..'

test('flattenDepth', () => {
  expect(flattenDepth([], 2)).toEqual([])
})

test('flattenDepth', () => {
  expect(flattenDepth([1, 2, 3], 2)).toEqual([1, 2, 3])
})

test('flattenDepth', () => {
  expect(flattenDepth([0, [1, [2, [3, [4]]]]], 2)).toEqual([0, 1, 2, [3, [4]]])
})

test('flattenDepth', () => {
  expect(flattenDepth([0, [1, [2, [3, [4]]]]], 3)).toEqual([0, 1, 2, 3, [4]])
})

test('flattenDepth', () => {
  expect(flattenDepth([[1, 2], [3], [[4, [5]]]], 2)).toEqual([1, 2, 3, 4, [5]])
})
