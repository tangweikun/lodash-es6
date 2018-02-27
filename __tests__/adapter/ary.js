import { ary } from '../../src'

const firstTwoMax = ary(Math.max, 2)

test('ary', () => {
  expect(
    [[2, 6, 'a'], [8, 4, 6], [10]].map(x => ary(Math.max, 2)(...x)),
  ).toEqual([6, 8, 10])
})

test('ary', () => {
  expect([[12, 6, 11], [8, 4, 6], [10]].map(x => firstTwoMax(...x))).toEqual([
    12,
    8,
    10,
  ])
})
