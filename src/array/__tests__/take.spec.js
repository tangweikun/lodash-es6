import { take } from '..'

test('take', () => {
  expect(take([], 0)).toEqual([])
})

test('take', () => {
  expect(take([1, 2], 3)).toEqual([1, 2])
})

test('take', () => {
  expect(take([1, 2, 3, 4], 2)).toEqual([1, 2])
})
