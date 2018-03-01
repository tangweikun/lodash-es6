import { countBy } from '../../src'

test('countBy', () => {
  expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 4: 1, 6: 2 })
})

test('countBy', () => {
  expect(countBy([6, 4, 6, 5, 9], x => x)).toEqual({ 6: 2, 4: 1, 5: 1, 9: 1 })
})

test('countBy', () => {
  expect(countBy([6, 4, 6, 5, 9], x => x > 5)).toEqual({ true: 3, false: 2 })
})

test('countBy', () => {
  expect(countBy(['one', 'two', 'three'], 'length')).toEqual({ 3: 2, 5: 1 })
})
