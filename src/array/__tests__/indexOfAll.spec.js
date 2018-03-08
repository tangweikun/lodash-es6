import { indexOfAll } from '..'

test('indexOfAll', () => {
  expect(indexOfAll([1, 2, 3, 1], 1)).toEqual([0, 3])
})

test('indexOfAll', () => {
  expect(indexOfAll([3, 4], 1)).toEqual([])
})
