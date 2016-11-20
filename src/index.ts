import { Stream, combineArray } from 'most';

export function combineObj(obj: any): Stream<any>;
export function combineObj<T>(obj: any): Stream<T>;
export function combineObj<T>(obj: any): Stream<T> {
  const keys: string[] = Object.keys(obj);
  const keysCount: number = keys.length;

  const sources: any[] = new Array(keysCount);
  const sanitizedKeys: any[] = new Array(keysCount);

  let i = 0;
  for (; i < keysCount; ++i) {
    sanitizedKeys[i] = keys[i].replace(/\$$/, ``);
    sources[i] = obj[keys[i]];
  }

  return combineArray((...args) => {
    const combination: any = {};

    for (i = 0; i < keysCount; ++i) {
      combination[sanitizedKeys[i]] = args[i];
    }

    return combination;
  }, sources) as Stream<T>;
}
