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
