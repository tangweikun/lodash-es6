import { uniq } from '..'

test('uniq', () => {
  expect(uniq([])).toEqual([])
})

test('uniq', () => {
  expect(uniq([1, 2, 2, 3, 1])).toEqual([1, 2, 3])
})

test('uniq', () => {
  expect(uniq([2, 2, 3, 1, 2, 4])).toEqual([2, 3, 1, 4])
})
