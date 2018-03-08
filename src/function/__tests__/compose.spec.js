import { compose } from '..'

test('compose', () => {
  const add5 = x => x + 5
  const multiply = (x, y) => x * y
  const multiplyAndAdd5 = compose(add5, multiply)
  multiplyAndAdd5(5, 2)
  expect(multiplyAndAdd5(5, 2)).toBe(15)
})
