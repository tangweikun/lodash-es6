import { pullAt } from '..'

test('pullAt', () => {
  let arr = ['a', 'b', 'a', 'c']
  expect(pullAt(arr, [0, 1])).toEqual(['a', 'b'])
  expect(arr).toEqual(['a', 'c'])
})

test('pullAt', () => {
  let arr = [0, 1, 2, 3, 4]
  expect(pullAt(arr, [1, 4])).toEqual([1, 4])
  expect(arr).toEqual([0, 2, 3])
})

test('pullAt', () => {
  let arr = [0, 1, 2, 3, 4]
  expect(pullAt(arr, [3, 5])).toEqual([3])
  expect(arr).toEqual([0, 1, 2, 4])
})
