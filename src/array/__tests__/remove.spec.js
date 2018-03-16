import { remove } from '..'

test('remove', () => {
  let arr = [1, 2, 3, 4]
  const fn = n => n % 2 === 0
  const removed = remove(arr, fn)
  expect(arr).toEqual([1, 3])
  expect(removed).toEqual([2, 4])
})

test('remove', () => {
  let arr = [1, 2, 3, 4, 4, 1]
  const fn = n => n === 4
  const removed = remove(arr, fn)
  expect(arr).toEqual([1, 2, 3, 1])
  expect(removed).toEqual([4, 4])
})

test('remove', () => {
  let arr = [1, 2, 3, 4]
  const fn = n => n > 0
  const removed = remove(arr, fn)
  expect(arr).toEqual([])
  expect(removed).toEqual([1, 2, 3, 4])
})

test('remove', () => {
  let arr = [1, 2, 3, 4]
  const fn = n => n < 2
  const removed = remove(arr, fn)
  expect(arr).toEqual([2, 3, 4])
  expect(removed).toEqual([1])
})
