import { pipeFunctions } from '../../src'

test('pipeFunctions', () => {
  const add5 = x => x + 5
  const multiply = (x, y) => x * y
  const multiplyAndAdd5 = pipeFunctions(multiply, add5)

  expect(multiplyAndAdd5(5, 2)).toBe(15)
})
