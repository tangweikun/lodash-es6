import { compact } from '..'

test('compact', () => {
  expect(compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])).toEqual(
    [1, 2, 3, 'a', 's', 34],
  )
})
