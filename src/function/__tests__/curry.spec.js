import { curry } from '..'

test('curry', () => {
  expect(curry(Math.pow)(2)(10)).toBe(1024)
  expect(curry(Math.min, 4)(10)(50)(12)(11)).toBe(10)
})
