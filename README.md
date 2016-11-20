# most-combineobj

> Combine Objects of Streams

This is helpful library for combining an object of streams, into a single
stream containing an object of values.

## Let me have it!
```sh
npm install --save most-combineobj
```

## API

####`combineObj (objectOfStreams): Stream`

```typescript
const obj = {
  a: just(1),
  b: just(2),
  c: just(3),
};

combineObj(obj).observe(({ a, b, c }) => {
  console.log(a, b, c) // 1 2 3
});
```