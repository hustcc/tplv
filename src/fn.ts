/**
 * get render function
 * @param tpl
 * @param keys
 */
export function fn(tpl: string, keys: string[]) {
  return new Function(...keys, tpl);
}
