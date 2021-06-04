# `size-satisfies`
![version](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/NodeSecure/size-satisfies/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/NodeSecure/size-satisfies/commit-activity)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
![dep](https://img.shields.io/david/NodeSecure/size-satisfies)
![size](https://img.shields.io/github/languages/code-size/NodeSecure/size-satisfies)

Same as SemVer.satisfies but for file size!

## Requirements
- [Node.js](https://nodejs.org/en/) v12 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @nodesecure/size-satisfies
# or
$ yarn add @nodesecure/size-satisfies
```

## Usage example

```js
import { strict } from "assert";
import sizeSatisfies from "size-satisfies";

const { strictEqual } = strict;

strictEqual(sizeSatisfies(">= 45KB", "20MB"), true);
strictEqual(sizeSatisfies("= 1MB", "1MB"), true);
strictEqual(sizeSatisfies("= 1MB", 2000), false);
```

The first argument of the `sizeSatisfies` method is the pattern with the operator + size. Available operators are `>=`, `<=`, `>`, `<`, `=`.

## API

### sizeSatisfies(pattern: string, size: number | string): boolean
When the size is a string we convert it to a bytes number. When the argument is a number we consider the value as bytes.

Invalid pattern will always return **false**.

## License
MIT
