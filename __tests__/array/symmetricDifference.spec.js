import { symmetricDifference } from '../../src'

test('symmetricDifference', () => {
  expect(symmetricDifference([], [])).toEqual([])
})

test('symmetricDifference', () => {
  expect(symmetricDifference([1, 2], [1, 2])).toEqual([])
})

test('symmetricDifference', () => {
  expect(symmetricDifference([1, 2, 3], [])).toEqual([1, 2, 3])
})

test('symmetricDifference', () => {
  expect(symmetricDifference([1, 2, 3], [3, 2, 1])).toEqual([])
})

test('symmetricDifference', () => {
  expect(symmetricDifference([6, 1, 2], [3, 5, 1])).toEqual([6, 2, 3, 5])
})

test('symmetricDifference', () => {
  expect(symmetricDifference([6, 6, 6], [6])).toEqual([])
})

test('symmetricDifference', () => {
  expect(symmetricDifference([6, 6, 6], [6, 4, 6])).toEqual([4])
})
