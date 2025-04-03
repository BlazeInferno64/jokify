[![NPM Downloads](https://img.shields.io/npm/dm/jokify.svg?style=round-square)](https://npm-stat.com/charts.html?package=jokify)
[![NPM Version](http://img.shields.io/npm/v/jokify.svg?style=flat)](https://npmjs.com/package/jokify)
[![install size](https://packagephobia.com/badge?p=jokify)](https://packagephobia.com/result?p=jokify)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/jokify?style=round-square)](https://bundlephobia.com/package/jokify@latest)
[![Gitpod Ready-to-code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod&style=round-square)](https://gitpod.io/#https://github.com/blazeinferno64/jokify)


# jokify

> Random funny dadjokes fetcher

# Installation

To get started with `jokify`, simply run the following command in your terminal:

[npm](https://npmjs.com) installation command:

```bash
$ npm i jokify
```

[yarn](https://yarnpkg.com) installation command:

```bash
$ yarn add jokify
```
# Getting started

First, require this library to your project as follows:

```js
const jokify = require("jokify");
```

If it's an ES Module then import it to your project as follows:

```js
import jokify from "jokify";
```
# Notes

New to Promises?

If you're not familiar with promises, check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to learn more.

# Api usage

Once you've imported `jokify` into your project, you're ready to fetch your first funny dadjoke.

Here's a simple example to get you started:

```js
// Import the 'JokifyClient' class
const { JokifyClient } = require("jokify");

// Create a new instance of 'JokifyClient' class
const client = new JokifyClient();

// Call the fetchJoke() method
client.fetchJoke()
    .then(result => {
        // Log the result
        console.log(result);
        // Result object contains:
        // - joke
        // - id
        // - status
    })
    .catch(error => {
        // Handle any error(s) which occur
        console.error(error);
    })
```

# LICENSE

`jokify` is released under the MIT License.

View the full license terms <a href="https://github.com/BlazeInferno64/jokify/blob/main/LICENSE">here</a>.

# Bugs & Issues

Found a bug or want a new feature?

Report issues and request features on the [jokify issue tracker](https://github.com/blazeinferno64/jokify/issues).

`Thanks for reading!`

`Have a great day ahead :D`