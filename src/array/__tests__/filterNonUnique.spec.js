import { filterNonUnique } from '..'

test('filterNonUnique', () => {
  expect(filterNonUnique([1, 2, 2, 3])).toEqual([1, 3])
})

test('filterNonUnique', () => {
  expect(filterNonUnique([1, 1, 2, 4, 2, 4])).toEqual([])
})
