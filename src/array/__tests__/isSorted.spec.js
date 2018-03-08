import { isSorted } from '..'

test('isSorted', () => {
  expect(isSorted([2, 1, 4, 9])).toEqual(0)
})

test('isSorted', () => {
  expect(isSorted([12, 11, 4, 1])).toEqual(-1)
})

test('isSorted', () => {
  expect(isSorted([12, 12, 11, 4, 1])).toEqual(-1)
})

test('isSorted', () => {
  expect(isSorted([12, 12, 11, 4, 4, 1])).toEqual(-1)
})

test('isSorted', () => {
  expect(isSorted([12, 12, 11, 4, 1, 2])).toEqual(0)
})

test('isSorted', () => {
  expect(isSorted([12, 12, 11, 4, 1, 1])).toEqual(-1)
})

test('isSorted', () => {
  expect(isSorted([-12, -11, -4, -1])).toEqual(1)
})

test('isSorted', () => {
  expect(isSorted([-12, -12, -11, -4, -1])).toEqual(1)
})

test('isSorted', () => {
  expect(isSorted([-12, -12, -11, -4, -1, -4])).toEqual(0)
})

test('isSorted', () => {
  expect(isSorted([-12, -12, -11, -4, -1, -1])).toEqual(1)
})
