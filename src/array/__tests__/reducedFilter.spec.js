import { reducedFilter } from '..'

test('reducedFilter', () => {
  expect(
    reducedFilter(
      [
        {
          id: 1,
          name: 'john',
          age: 24,
        },
        {
          id: 2,
          name: 'mike',
          age: 50,
        },
      ],
      ['id', 'name'],
      item => item.age > 24,
    ),
  ).toEqual([{ id: 2, name: 'mike' }])
})
