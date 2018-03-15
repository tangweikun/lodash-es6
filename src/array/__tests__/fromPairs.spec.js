import { fromPairs } from '..'

test('fromPairs', () => {
  expect(fromPairs([])).toEqual({})
})

test('fromPairs', () => {
  expect(fromPairs([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 })
})

test('fromPairs', () => {
  expect(fromPairs([['a', 1], ['b', [2]], ['c', { c1: 11 }]])).toEqual({
    a: 1,
    b: [2],
    c: { c1: 11 },
  })
})
