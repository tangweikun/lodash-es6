import { takeRight } from '..'

test('takeRight', () => {
  expect(takeRight([1, 2, 3])).toEqual([3])
})

test('takeRight', () => {
  expect(takeRight([1, 2, 3, 4], 2)).toEqual([3, 4])
})

test('takeRight', () => {
  expect(takeRight([1, 2, 3], 4)).toEqual([1, 2, 3])
})
