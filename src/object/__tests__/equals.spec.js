import { equals } from '..'

test('equals', () => {
  expect(equals(1, 1)).toBe(true)
})

test('equals', () => {
  expect(equals(1, '1')).toBe(false)
})

test('equals', () => {
  expect(equals({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true)
})

test('equals', () => {
  expect(equals({ a: 1, b: 2 }, { a: 2, b: 2 })).toBe(false)
})

test('equals', () => {
  expect(equals({}, {})).toBe(true)
})

test('equals', () => {
  expect(equals({ a: 1 }, { a: 1 })).toBe(true)
})

test('equals', () => {
  expect(equals({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true)
})

test('equals', () => {
  expect(equals({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })).toBe(true)
})
