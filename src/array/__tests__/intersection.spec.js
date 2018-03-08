import { intersection } from '..'

test('intersection', () => {
  expect(intersection([1, 2, 3], [4, 3, 2])).toEqual([2, 3])
})

test('intersection', () => {
  expect(intersection([11, 12, 23], [4, 3, 2])).toEqual([])
})
