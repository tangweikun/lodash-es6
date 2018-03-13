import { concat } from '..'

test('concat', () => {
  expect(concat([1], 2, [3], [[4]])).toEqual([1, 2, 3, [4]])
})

test('concat', () => {
  expect(concat([], [])).toEqual([])
})

test('concat', () => {
  expect(concat(1, 2)).toEqual([1, 2])
})

test('concat', () => {
  expect(concat([1], [2])).toEqual([1, 2])
})
