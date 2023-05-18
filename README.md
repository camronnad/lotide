# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @camnaderi/lotide`
`run npm test`
`see results in terminal`

**Require it:**

`const _ = require('@camnaderi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays`: eqArrays is a function which takes in two arrays and returns true or false, based on a perfect match.
* `middle`: middle is a function which will take in an array and return the middle-most element(s) of the given array.
* `flatten`: flatten is a function which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.