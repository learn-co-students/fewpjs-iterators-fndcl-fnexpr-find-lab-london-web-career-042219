

Let's create a function that uses the method `find()` to single out a specific
result in game record data for the football team Kansas City Chiefs. We want to
find out if, at _any_ point in the team's existence, they've had a win in the
Superbowl. Our data looks like this:

```js
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]
```

Write a function called `superbowlWin()` in `index.js` that:
 * Receives 1 argument, an `Array` of JavaScript `Object`s
 * Each object has two properties: `year` and `result`
 * Use `find()` to test each `Object` to see if the `result` is `"W"` &mdash; a
   win!
 * `superbowlWin()` should return the `year` when the win occurred (if it
   occurred at all!). If no win is found, it should return, sadly, `undefined`

Run the tests using `learn`.

## Conclusion

`Array.find()` is a built-in function in JavaScript which is used to get the
value of the first element in the array that satisfies the provided condition.
With this, you can quickly check all the elements of the array and returns the
first match.

## Resources

- [MDN: Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
