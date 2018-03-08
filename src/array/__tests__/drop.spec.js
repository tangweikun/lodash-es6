import { drop } from '..'

test('drop', () => {
  expect(drop([])).toEqual([])
})

test('drop', () => {
  expect(drop([1, 2, 3, 4])).toEqual([2, 3, 4])
})

test('drop', () => {
  expect(drop([1, 2, 3, 4], 2)).toEqual([3, 4])
})

test('drop', () => {
  expect(drop([1, 2, 3, 4], 5)).toEqual([])
})
