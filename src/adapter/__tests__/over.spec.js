import { over } from '..'

test('over', () => {
  expect(over(Math.min, Math.max)(1, 2, 3, 4, 5)).toEqual([1, 5])
})
