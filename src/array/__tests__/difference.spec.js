import { difference } from '..'

test('difference', () => {
  expect(difference([], [])).toEqual([])
})

test('difference', () => {
  expect(difference([1], [1])).toEqual([])
})

test('difference', () => {
  expect(difference([1], [])).toEqual([0])
})

// test('difference', () => {
//   expect(difference([NaN], [NaN])).toEqual([])
// })

test('difference', () => {
  expect(difference([1, 2], [2, 1])).toEqual([0, 1])
})

test('difference', () => {
  expect(difference([1, 2, 3, 4, 5], [11, 2, 3, 44, 5, 6])).toEqual([0, 3, 5])
})
