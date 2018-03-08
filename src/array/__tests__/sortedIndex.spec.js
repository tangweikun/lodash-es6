import { sortedIndex } from '..'

test('sortedIndex', () => {
  expect(sortedIndex([5, 3, 2, 1], 4)).toBe(1)
})

test('sortedIndex', () => {
  expect(sortedIndex([30, 50], 40)).toBe(1)
})

test('sortedIndex', () => {
  expect(sortedIndex([5, 3, 2, 1], 3)).toBe(1)
})

test('sortedIndex', () => {
  expect(sortedIndex([1], 3)).toBe(0)
})

test('sortedIndex', () => {
  expect(sortedIndex([4], 3)).toBe(0)
})

test('sortedIndex', () => {
  expect(sortedIndex([3], 3)).toBe(0)
})

test('sortedIndex', () => {
  expect(sortedIndex([], 3)).toBe(0)
})

test('sortedIndex', () => {
  expect(sortedIndex([3, 3, 3], 3)).toBe(0)
})

test('sortedIndex', () => {
  expect(sortedIndex([3, 3, 4], 3)).toBe(0)
})

test('sortedIndex', () => {
  expect(sortedIndex([4, 3, 3], 3)).toBe(1)
})
