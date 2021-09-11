# GET

[![ci](https://github.com/Travis-Carlton/npm-travic-get/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Travis-Carlton/npm-travic-get/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/@travic%2Fget.svg)](https://badge.fury.io/js/@travic%2Fget)
[![branches]](https://github.com/Travis-Carlton/npm-travic-get/actions/workflows/coverage/badge-branches.svg)

```ruby
npm i @travic/get
// or
yarn add @travic/get
```

To use, `import` or `require` package;

```typescript
import { get } from '@travic/get';
// or
const { get } = require('@travic/get');

// ...

// example use

const obj = {
	a: 'string',
	b: true,
	c: {
		aa: 'another string',
	},
	d: [1, 2, 3],
};

console.log(get(obj, 'a')); // -> 'string'

console.log(get(obj, 'b')); // -> true

console.log(get(obj, 'c')); // -> { aa: 'aa' }

console.log(get(obj, 'c.aa')); // -> 'another string'

console.log(get(obj, 'c.aa.aaa')); // -> null

console.log(get(obj, 'c.aa.aaa', "It's not here!")); // -> "It's not here!"

console.log(get(obj, 'd.1')); // -> 2

console.log(get(1, 'd.1')); // -> null
```
