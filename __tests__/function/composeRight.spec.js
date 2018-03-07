import { composeRight } from '../../src'

test('compose', () => {
  const add = (x, y) => x + y
  const square = x => x * x
  const addAndSquare = composeRight(add, square)
  addAndSquare(1, 2) // 9
})
