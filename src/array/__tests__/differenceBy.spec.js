import { differenceBy } from '..'

test('differenceBy', () => {
  expect(
    differenceBy([1, 2, 0, false, '0'], [3, 4, false, 1, 0], Boolean),
  ).toEqual([3, 4])
})
