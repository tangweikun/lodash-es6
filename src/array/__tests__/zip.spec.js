import { zip } from '..'

test('zip', () => {
  expect(zip([1, 2], [4, 5], [9, 1])).toEqual([[1, 4, 9], [2, 5, 1]])
})

test('zip', () => {
  expect(zip([1, 2, 3], [4, 5, 6])).toEqual([[1, 4], [2, 5], [3, 6]])
})

test('zip', () => {
  expect(zip([])).toEqual([])
})

test('zip', () => {
  expect(zip([1, 2], [], [3, 4, 5])).toEqual([
    [1, undefined, 3],
    [2, undefined, 4],
    [undefined, undefined, 5],
  ])
})
