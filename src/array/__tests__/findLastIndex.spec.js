import { findLastIndex } from '..'

test('findLastIndex', () => {
  expect(findLastIndex([1, 2, 3, 4], n => n % 2 === 1)).toBe(2)
})

test('findLastIndex', () => {
  expect(findLastIndex([false, true, 3, 'a', null, 1, ''], Boolean)).toBe(5)
})
