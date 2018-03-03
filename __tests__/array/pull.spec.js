import { pull } from '../../src'

test('pull', () => {
  const myArray = ['a', 'b', 'c', 'a', 'b', 'c']
  pull(myArray, 'a', 'c')
  expect(myArray).toEqual(['b', 'b'])
})
