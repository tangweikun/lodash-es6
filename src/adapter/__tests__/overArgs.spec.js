import { overArgs } from '..'

test('overArgs', () => {
  const square = n => n * n
  const double = n => n * 2
  const fn = overArgs((x, y) => [x, y], [square, double])

  expect(fn(9, 3)).toEqual([81, 6])
})

test('overArgs', () => {
  const square = n => n * n
  const double = n => n * 2
  const fn = overArgs((x, y, z) => [x, y, z], [square, double, double])

  expect(fn(9, 3, 4)).toEqual([81, 6, 8])
})
