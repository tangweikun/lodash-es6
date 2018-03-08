import { deepClone } from '../../src'

test('deepClone', () => {
  const a = { foo: 'bar', obj: { a: 1, b: 2 } }
  const b = deepClone(a)

  expect(a === b).toBe(false)
  expect(a.obj === b.obj).toBe(false)
})
