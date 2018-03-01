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

</details>

## 🔌 Adapter

### ary

Creates a function that accepts up to `n` arguments, ignoring any additional arguments.

Call the provided function, `fn`, with up to `n` arguments, using `Array.slice(0,n)` and the spread operator (`...`).

```js
const ary = (fn, n) => (...args) => fn(...args.slice(0, n))
```

<details>
<summary>Examples</summary>

```js
const firstTwoMax = ary(Math.max, 2)
;[[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)) // [6, 8, 10]
```

</details>

<br>[⬆ Back to top](#table-of-contents)

### call

Given a key and a set of arguments, call them when given a context. Primarily useful in composition.

Use a closure to call a stored key with stored arguments.

```js
const call = (key, ...args) => context => context[key](...args)
```

<details>
<summary>Examples</summary>

```js
Promise.resolve([1, 2, 3])
  .then(call('map', x => 2 * x))
  .then(console.log) //[ 2, 4, 6 ]
const map = call.bind(null, 'map')
Promise.resolve([1, 2, 3])
  .then(map(x => 2 * x))
  .then(console.log) //[ 2, 4, 6 ]
```

</details>

<br>[⬆ Back to top](#table-of-contents)

### over

Creates a function that invokes each provided function with the arguments it receives and returns the results.

Use `Array.map()` and `Function.apply()` to apply each function to the given arguments.

```js
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args))
```

<details>
<summary>Examples</summary>

```js
const minMax = over(Math.min, Math.max)
minMax(1, 2, 3, 4, 5) // [1,5]
```

</details>

<br>[⬆ Back to top](#table-of-contents)

### overArgs

Creates a function that invokes the provided function with its arguments transformed.

Use `Array.map()`to apply transforms to args in combination with the spread operator `(...)` to pass the transformed arguments to fn.

```js
const overArgs = (fn, transforms) => (...args) =>
  fn(...args.map((val, i) => transforms[i](val)))
```

<details>
<summary>Examples</summary>

```js
const square = n => n * n
const double = n => n * 2
const fn = overArgs((x, y) => [x, y], [square, double])
fn(9, 3) // [81, 6]
```

</details>

<br>[⬆ Back to top](#table-of-contents)

### pipeFunctions

Performs left-to-right function composition.

Use `Array.reduce()` with the spread operator `(...)` to perform left-to-right function composition. The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.

```js
const pipeFunctions = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)))
```

<details>
<summary>Examples</summary>

```js
const add5 = x => x + 5
const multiply = (x, y) => x * y
const multiplyAndAdd5 = pipeFunctions(multiply, add5)
multiplyAndAdd5(5, 2) // 15
```

</details>

<br>[⬆ Back to top](#table-of-contents)

## 📚 Array

### chunk

Performs left-to-right function composition.

Chunks an array into smaller arrays of a specified size.

Use `Array.from()` to create a new array, that fits the number of chunks that will be produced. Use `Array.slice()` to map each element of the new array to a chunk the length of size. If the original array can't be split evenly, the final chunk will contain the remaining elements.

```js
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  )
```

<details>
<summary>Examples</summary>

```js
chunk([1, 2, 3, 4, 5], 2) // [[1,2],[3,4],[5]]
```

</details>

<br>[⬆ Back to top](#table-of-contents)
