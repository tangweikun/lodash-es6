# snippet-of-javascript

## Table of Contents

### 🔌 Adapter

<details>
<summary>View contents</summary>

* [`ary`](#ary)
* [`call`](#call)
* [`over`](#over)
* [`overArgs`](#overargs)
* [`pipeFunctions`](#pipefunctions)

</details>

### 📚 Array

<details>
<summary>View contents</summary>

* [`chunk`](#chunk)
* [`compact`](#compact)
* [`countBy`](#countby)
* [`countOccurrences`](#countoccurrences)
* [`deepFlatten`](#deepflatten)
* [`difference`](#difference)
* [`differenceBy`](#differenceby)
* [`drop`](#drop)
* [`dropRight`](#drorRight)
* [`filterNonUnique`](#filternonunique)
* [`findLast`](#findlast)
* [`findLastIndex`](#findlastindex)
* [`flatten`](#flatten)
* [`groupBy`](#groupby)
* [`indexOfAll`](#indexofall)
* [`intersection`](#intersection)
* [`longestItem`](#longestitem)
* [`maxN`](#maxn)
* [`permutations`](#permutations)
* [`pull`](#pull)
* [`reducedFilter`](#reducedfilter)
* [`sortedIndex`](#sortedindex)
* [`symmetricDifference`](#symmetricdifference)

</details>

### 🎛️ Function

<details>
<summary>View contents</summary>

* [`compose`](#compose)
* [`composeRight`](#composeright)

</details>

## 🔌 Adapter

### ary

Creates a function that accepts up to `n` arguments, ignoring any additional arguments.

```js
// source code
const ary = (fn, n) => (...args) => fn(...args.slice(0, n))

// examples
const firstTwoMax = ary(Math.max, 2)
;[[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)) // [6, 8, 10]
```

### call

Given a key and a set of arguments, call them when given a context. Primarily useful in composition.

```js
// source code
const call = (key, ...args) => context => context[key](...args)

// examples
Promise.resolve([1, 2, 3])
  .then(call('map', x => 2 * x))
  .then(console.log) //[ 2, 4, 6 ]
const map = call.bind(null, 'map')
Promise.resolve([1, 2, 3])
  .then(map(x => 2 * x))
  .then(console.log) //[ 2, 4, 6 ]
```

### over

Creates a function that invokes each provided function with the arguments it receives and returns the results.

```js
// source code
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args))

// examples
const minMax = over(Math.min, Math.max)
minMax(1, 2, 3, 4, 5) // [1,5]
```

### overArgs

Creates a function that invokes the provided function with its arguments transformed.

```js
// source code
const overArgs = (fn, transforms) => (...args) =>
  fn(...args.map((val, i) => transforms[i](val)))

// examples
const square = n => n * n
const double = n => n * 2
const fn = overArgs((x, y) => [x, y], [square, double])
fn(9, 3) // [81, 6]
```

### pipeFunctions

Performs left-to-right function composition.

```js
// source code
const pipeFunctions = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)))

// examples
const add5 = x => x + 5
const multiply = (x, y) => x * y
const multiplyAndAdd5 = pipeFunctions(multiply, add5)
multiplyAndAdd5(5, 2) // 15
```

<br>[⬆ Back to top](#table-of-contents)

## 📚 Array

### chunk

Performs left-to-right function composition.

Chunks an array into smaller arrays of a specified size.

```js
// source code
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  )

// examples
chunk([1, 2, 3, 4, 5], 2) // [[1,2],[3,4],[5]]
```

### compact

Removes falsey values from an array.

```js
// source code
const compact = arr => arr.filter(Boolean)

// examples
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]) // [ 1, 2, 3, 'a', 's', 34 ]
```

### countBy

Groups the elements of an array based on the given function and returns the count of elements in each group.

```js
// source code
const countBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || 0) + 1
      return acc
    }, {})

// examples
countBy([6.1, 4.2, 6.3], Math.floor) // {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length') // {3: 2, 5: 1}
```

### countOccurrences

Counts the occurrences of a value in an array.

```js
// source code
const countOccurrences = (arr, val) => arr.reduce((a, v) => a + (v === val), 0)

// examples
countOccurrences([1, 1, 2, 1, 2, 3], 1) // 3
```

### deepFlatten

Deep flattens an array.

```js
// source code
const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

// examples
deepFlatten([1, [2], [[3], 4], 5]) // [1,2,3,4,5]
```

### difference

Returns the difference index between two arrays.

```js
// source code
const difference = (a, b) =>
  Array.from({ length: Math.max(a.length, b.length) }).reduce(
    (res, x, i) => (a[i] === b[i] ? res : [...res, i]),
    [],
  )

// examples
difference([1, 2], [2, 1]) // [0, 1]
```

### differenceBy

Returns the difference index between two arrays, after applying the provided function to each array element of both.

```js
// source code
const differenceBy = (a, b, fn) =>
  Array.from({ length: Math.max(a.length, b.length) }).reduce(
    (res, x, i) => (fn(a[i]) === fn(b[i]) ? res : [...res, i]),
    [],
  )

// examples
differenceBy([1, 2, 0, false, '0'], [3, 4, false, 1, 0], Boolean) // [3, 4]
```

### drop

Returns a new array with n elements removed from the left.

```js
// source code
const drop = (arr, n = 1) => arr.slice(n)

// examples
drop([1, 2, 3, 4], 2) // [3, 4]
```

### dropRight

Returns a new array with n elements removed from the right.

```js
// source code
const dropRight = (arr, n = 1) => arr.slice(0, -n)

// examples
drop([1, 2, 3, 4], 2) // [1, 2]
```

### filterNonUnique

Filters out the non-unique values in an array.

```js
// source code
const filterNonUnique = arr =>
  arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))

// examples
filterNonUnique([1, 2, 2, 3, 4, 4, 5]) // [1,3,5]
```

### findLast

Returns the last element for which the provided function return a truthy value.

```js
// source code
const findLast = (arr, fn) => arr.filter(fn).slice(-1)[0]

// examples
findLast([1, 2, 3, 4], n => n % 2 === 1) // 3
```

### findLastIndex

Return the index of the last element for which the provided function returns a truthy value.

```js
// source code
const findLastIndex = (arr, fn) =>
  arr.length - 1 - ~~arr.reverse().findIndex(fn)

// examples
findLastIndex([1, 2, 3, 4], n => n % 2 === 1) // 2
```

### flatten

Flattens an array up to the specified depth.

```js
// source code
const flatten = (arr, depth = 1) =>
  [].concat(
    ...arr.map(
      v => (depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    ),
  )

// examples
flatten([1, [2], 3, 4]) // [1, 2, 3, 4]
```

### groupBy

Groups the elements of an array based on the given function.

```js
// source code
const groupBy = (arr, fn) =>
  arr.reduce((acc, x) => {
    const foo = typeof fn === 'function' ? fn(x) : x[fn]
    acc[foo] = (acc[foo] || []).concat(x)
    return acc
  }, {})

// examples
groupBy([6.1, 4.2, 6.3], Math.floor) // { 4: [4.2], 6: [6.1, 6.3] }
```

### indexOfAll

Return all indices of val in an array. If val never occurs, return [].

```js
// source code
const indexOfAll = (arr, val) => {
  const indices = []
  arr.forEach((el, i) => el === val && indices.push(i))
  return indices
}

// examples
indexOfAll([1, 2, 3, 1, 2, 3], 1) // [0,3]
indexOfAll([1, 2, 3], 4) // []
```

### intersection

Returns a list of elements that exist in both arrays.

```js
// source code
const intersection = (a, b) => {
  const s = new Set(b)
  return a.filter(x => s.has(x))
}

// examples
intersection([1, 2, 3], [4, 3, 2]) // [2,3]
```

### longestItem

Takes any number of iterable objects or objects with a length property and returns the longest one.

```js
// source code
const longestItem = (...args) =>
  args.reduce((acc, x) => (acc.length < x.length ? x : acc))

// examples
longestItem('this', 'is', 'a', 'testcase') // 'testcase'
longestItem(...['a', 'ab', 'abc']) // 'abc'
longestItem(...['a', 'ab', 'abc'], 'abcd') // 'abcd'
longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
longestItem([1, 2, 3], 'foobar') // 'foobar'
```

### maxN

Return the n maximum elements from the provided array. If n is greater than or equal to the provided array's length, then return the original array(sorted in descending order).

```js
// source code
const maxN = (arr, n = 1) => arr.sort((a, b) => b - a).slice(0, n)

// examples
maxN([1, 2, 3]) // [3]
maxN([1, 2, 3], 2) // [3,2]
```

### permutations

Generates all permutations of an array's elements (contains duplicates).

```js
// source code
const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val,
        ]),
      ),
    [],
  )
}

// examples
permutations([1, 33, 5]) // [ [ 1, 33, 5 ], [ 1, 5, 33 ], [ 33, 1, 5 ], [ 33, 5, 1 ], [ 5, 1, 33 ], [ 5, 33, 1 ] ]
```

### pull

Mutates the original array to filter out the values specified.

```js
// source code
const pull = (arr, ...args) => {
  for (let i = 0; i < arr.length; i++) {
    if (args.includes(arr[i])) {
      arr.splice(i, 1)
      i--
    }
  }
}

// examples
let myArray = ['a', 'b', 'c', 'a', 'b', 'c']
pull(myArray, 'a', 'c') // myArray = [ 'b', 'b' ]
```

### reducedFilter

Filter an array of objects based on a condition while also filtering out unspecified keys.

```js
// source code
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(x => keys.reduce((acc, k) => ({ ...acc, [k]: x[k] }), {}))

// examples
const data = [
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
]

reducedFilter(data, ['id', 'name'], item => item.age > 24) // [{ id: 2, name: 'mike'}]
```

### sortedIndex

Return the lowest index at which value should be inserted into array in order to maintain its sort order.

```js
// source code
const sortedIndex = (arr, n) => {
  const difference = arr.length <= 1 ? 0 : arr[arr.length - 1] - arr[0]
  return difference === 0 ? 0 : arr.findIndex(x => difference * (x - n) >= 0)
}

// examples
sortedIndex([5, 3, 2, 1], 4) // 1
sortedIndex([30, 50], 40) // 1
```

### symmetricDifference

Return the symmetric difference between two arrays.

```js
// source code
const symmetricDifference = (a, b) => [
  ...a.filter(x => !b.includes(x)),
  ...b.filter(x => !a.includes(x)),
]

// examples
symmetricDifference([1, 2, 3], [1, 2, 4]) // [3,4]
```

## 🎛️ Function

### compose

Performs right-to-left function composition.

```js
// source code
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

// examples
const add5 = x => x + 5
const multiply = (x, y) => x * y
const multiplyAndAdd5 = compose(add5, multiply)
multiplyAndAdd5(5, 2) // 15
```

### composeRight

Performs left-to-right function composition.

```js
// source code
const composeRight = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)))

// examples
const add = (x, y) => x + y
const square = x => x * x
const addAndSquare = composeRight(add, square)
addAndSquare(1, 2) // 9
```

### curry

Curries a function.

```js
// source code
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)

// examples
curry(Math.pow)(2)(10) // 1024
curry(Math.min, 3)(10)(50)(2) // 2
```
