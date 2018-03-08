import { findLast } from '..'

test('findLast', () => {
  expect(findLast([1, 2, 3, 4], n => n % 2 === 1)).toBe(3)
})

test('findLast', () => {
  expect(findLast([false, true, 3, 'a', null, 1, ''], Boolean)).toBe(1)
})
