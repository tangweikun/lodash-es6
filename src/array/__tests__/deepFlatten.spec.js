import { deepFlatten } from '..'

test('deepFlatten', () => {
  expect(deepFlatten([1, 2, 3])).toEqual([1, 2, 3])
})

test('deepFlatten', () => {
  expect(deepFlatten([1, [2, 3]])).toEqual([1, 2, 3])
})

test('deepFlatten', () => {
  expect(deepFlatten([1, [2], [3], [4, [5, 6], [7]], 8])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
  ])
})

test('deepFlatten', () => {
  expect(deepFlatten([1, { 1: 3, 2: [2] }, [4]])).toEqual([
    1,
    { 1: 3, 2: [2] },
    4,
  ])
})
