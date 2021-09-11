# GET

[![ci](https://github.com/Travis-Carlton/npm-travic-get/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Travis-Carlton/npm-travic-get/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/@travic%2Fget.svg)](https://badge.fury.io/js/@travic%2Fget)
[![npm](https://img.shields.io/npm/dw/@travic%2Fget.svg)](https://www.npmjs.com/package/@travic%2Fget)

![Coverage lines](https://img.shields.io/badge/Coverage:lines-100-blue.svg)
![Coverage functions](https://img.shields.io/badge/Coverage:functions-100-blue.svg)
![Coverage branches](https://img.shields.io/badge/Coverage:branches-100-blue.svg)
![Coverage statements](https://img.shields.io/badge/Coverage:statements-100-blue.svg)

```ruby
npm i @travic/get
or
yarn add @travic/get
```

To use, `import` or `require` package;

```typescript
import { get } from '@travic/get';
// or
const { get } = require('@travic/get');

// example use

const obj = {
	a: 'string',
	b: true,
	c: {
		aa: 'another string',
	},
	d: [1, 2, 3],
};

get(obj, 'a'); // -> 'string'

get(obj, 'b'); // -> true

get(obj, 'c'); // -> { aa: 'aa' }

get(obj, 'c.aa'); // -> 'another string'

get(obj, 'c.aa.aaa'); // -> null

get(obj, 'c.aa.aaa', "It's not here!"); // -> "It's not here!"

get(obj, 'd.1'); // -> 2

get(1, 'd.1'); // -> null
```
