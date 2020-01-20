import { tpl } from './tpl';
import { fn } from './fn';

/**
 * template render entry
 * @param template
 * @param data
 */
export function render(template: string, data: object): string {
  const keys = Object.keys(data);
  const values = keys.map((k: any) => data[k]);

  const t = tpl(template);
  const f = fn(t, keys);

  return f(...values);
}
