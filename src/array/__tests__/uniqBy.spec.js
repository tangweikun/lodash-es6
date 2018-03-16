import { uniqBy } from '..'

test('uniqBy', () => {
  expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2])
})

test('uniqBy', () => {
  expect(uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], 'x')).toEqual([
    { x: 1 },
    { x: 2 },
  ])
})

test('uniqBy', () => {
  const fn = n => n % 2
  expect(uniqBy([3, 4, 5, 6], fn)).toEqual([3, 4])
})

test('uniqBy', () => {
  expect(uniqBy(['a', 'bb', 'ccc', 'd', 'eee', 'ffff'], 'length')).toEqual([
    'a',
    'bb',
    'ccc',
    'ffff',
  ])
})
