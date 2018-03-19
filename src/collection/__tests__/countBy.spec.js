import { countBy } from '..'

test('countBy', () => {
  expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': 1, '6': 2 })
})

test('countBy', () => {
  expect(countBy(['one', 'two', 'three'], 'length')).toEqual({ '3': 2, '5': 1 })
})
