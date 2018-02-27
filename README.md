# snippet-of-javascript

[![Greenkeeper badge](https://badges.greenkeeper.io/tangweikun/snippet-of-javascript.svg)](https://greenkeeper.io/)

## Table of Contents

### 🔌 Adapter

<details>
<summary>View contents</summary>

* [`ary`](#ary)

</details>

## 🔌 AdapterCreates a function that accepts up to `n` arguments, ignoring any additional arguments.

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
