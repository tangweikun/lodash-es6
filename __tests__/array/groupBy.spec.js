import { groupBy } from '../../src'

test('groupBy', () => {
  expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
    4: [4.2],
    6: [6.1, 6.3],
  })
})

test('groupBy', () => {
  expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({
    3: ['one', 'two'],
    5: ['three'],
  })
})
