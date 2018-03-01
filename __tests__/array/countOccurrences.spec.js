import { countOccurrences } from '../../src'

test('countOccurrences', () => {
  expect(countOccurrences([1, 1, 2, 1, 2, 3], 1)).toBe(3)
})

test('countOccurrences', () => {
  expect(countOccurrences([1, 1, 2, 1, 2, 3], 11)).toBe(0)
})
