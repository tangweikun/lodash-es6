# snippet-of-javascript

## Table of Contents

### 🔌 Adapter

<details>
<summary>View contents</summary>

* [`ary`](#ary)
* [`call`](#call)
* [`over`](#over)
* [`overArgs`](#overArgs)
* [`pipeFunctions`](#pipeFunctions)

</details>

### 📚 Array

<details>
<summary>View contents</summary>

* [`chunk`](#chunk)
* [`compact`](#compact)
* [`countBy`](#countBy)

</details>

## 🔌 Adapter

### ary

Creates a function that accepts up to `n` arguments, ignoring any additional arguments.

```js
const ary = (fn, n) => (...args) => fn(...args.slice(0, n))
```

#### Examples

```js
const firstTwoMax = ary(Math.max, 2)
;[[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)) // [6, 8, 10]
```

### call

Given a key and a set of arguments, call them when given a context. Primarily useful in composition.

```js
const call = (key, ...args) => context => context[key](...args)
```

#### Examples

```js
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
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args))
```

#### Examples

```js
const minMax = over(Math.min, Math.max)
minMax(1, 2, 3, 4, 5) // [1,5]
```

### overArgs

Creates a function that invokes the provided function with its arguments transformed.

```js
const overArgs = (fn, transforms) => (...args) =>
  fn(...args.map((val, i) => transforms[i](val)))
```

#### Examples

```js
const square = n => n * n
const double = n => n * 2
const fn = overArgs((x, y) => [x, y], [square, double])
fn(9, 3) // [81, 6]
```

### pipeFunctions

Performs left-to-right function composition.

```js
const pipeFunctions = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)))
```

#### Examples

```js
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
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  )
```

#### Examples

```js
chunk([1, 2, 3, 4, 5], 2) // [[1,2],[3,4],[5]]
```

### compact

Removes falsey values from an array.

```js
const compact = arr => arr.filter(Boolean)
```

#### Examples

```js
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]) // [ 1, 2, 3, 'a', 's', 34 ]
```

### countBy

Groups the elements of an array based on the given function and returns the count of elements in each group.

```js
const countBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || 0) + 1
      return acc
    }, {})
```

#### Examples

```js
countBy([6.1, 4.2, 6.3], Math.floor) // {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length') // {3: 2, 5: 1}
```

### countOccurrences

Counts the occurrences of a value in an array.

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => a + (v === val), 0)
```

#### Examples

```js
countOccurrences([1, 1, 2, 1, 2, 3], 1) // 3
```
