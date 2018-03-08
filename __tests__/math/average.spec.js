import { average } from '../../src'

test('average', () => {
  expect(average(1, 2, 3)).toBe(2)
})

test('average', () => {
  expect(average(1)).toBe(1)
})

test('average', () => {
  expect(average(0, 0)).toBe(0)
})
