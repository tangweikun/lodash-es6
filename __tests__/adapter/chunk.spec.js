import { chunk } from '../../src'

test('chunk', () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
})

test('chunk', () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]])
})

test('chunk', () => {
  expect(chunk([1, 2, 3, 4, 5, 6, 7], 4)).toEqual([[1, 2, 3, 4], [5, 6, 7]])
})
