import { longestItem } from '../../src'

test('longestItem', () => {
  expect(longestItem('this', 'is', 'a', 'testcase')).toBe('testcase')
})

test('longestItem', () => {
  expect(longestItem(...['a', 'ab', 'abc'])).toBe('abc')
})

test('longestItem', () => {
  expect(longestItem(...['a', 'ab', 'abc'], 'abcd')).toBe('abcd')
})

test('longestItem', () => {
  expect(longestItem([1, 2, 3], 'foobar')).toBe('foobar')
})

test('longestItem', () => {
  expect(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5])).toEqual([
    1,
    2,
    3,
    4,
    5,
  ])
})
