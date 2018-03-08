import { dropRight } from '..'

test('dropRight', () => {
  expect(dropRight([])).toEqual([])
})

test('dropRight', () => {
  expect(dropRight([1, 2, 3, 4])).toEqual([1, 2, 3])
})

test('dropRight', () => {
  expect(dropRight([1, 2, 3, 4], 2)).toEqual([1, 2])
})

test('dropRight', () => {
  expect(dropRight([1, 2, 3, 4], 5)).toEqual([])
})
