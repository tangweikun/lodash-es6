import { call } from '../../src'

test('call', () => {
  expect(call('map', x => x * 2)([1, 2])).toEqual([2, 4])
})

test('call', () => {
  expect(call('filter', x => x > 2)([4, 2, 3])).toEqual([4, 3])
})
