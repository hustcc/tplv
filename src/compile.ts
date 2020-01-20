import { tpl } from './tpl';
import { fn } from './fn';

/**
 * compile mode, for higher performance
 * @param template
 * @param keys
 */
export function compile(template: string, keys: string[]) {
  const t = tpl(template);
  const r = fn(t, keys);

  /* return render function */
  return function(data: object) {
    const values = keys.map((k: any) => data[k]);
    return r(...values);
  };
}
