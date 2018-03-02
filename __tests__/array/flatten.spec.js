import { flatten } from '../../src'

test('flatten', () => {
  expect(flatten([1, [2], 3, 4])).toEqual([1, 2, 3, 4])
})

test('flatten', () => {
  expect(flatten([1, [2, [3, [4, 5], 6], 7], 8], 2)).toEqual([
    1,
    2,
    3,
    [4, 5],
    6,
    7,
    8,
  ])
})
