import * as assert from 'assert';
import { just } from 'most';
import { combineObj } from '../src';

describe('combineObj', function () {
  it('combines object of streams into stream of object', function () {
    const obj = {
      a$: just(1),
      b$: just(2),
      c$: just(3),
    };

    combineObj(obj).observe(({ a, b, c }) => {
      assert.strictEqual(a, 1);
      assert.strictEqual(b, 2);
      assert.strictEqual(c, 3);
    });
  });
});
