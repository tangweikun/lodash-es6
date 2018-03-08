import { fibonacci } from '..'

test('fibonacci', () => {
  expect(fibonacci(1)).toEqual([0])
})

test('fibonacci', () => {
  expect(fibonacci(2)).toEqual([0, 1])
})

test('fibonacci', () => {
  expect(fibonacci(4)).toEqual([0, 1, 1, 2])
})

test('fibonacci', () => {
  expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5])
})

test('fibonacci', () => {
  expect(fibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8])
})

test('fibonacci', () => {
  expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
})

test('fibonacci', () => {
  expect(fibonacci(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21])
})
