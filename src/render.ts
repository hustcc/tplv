import { tpl } from './tpl';
import { fn } from './fn';
import { cpesc } from './esc';
/**
 * template render entry
 * @param template
 * @param data
 */
export function render(template: string, data: object): string {
  const tp = cpesc(template)
  
  const keys = Object.keys(data);
  const values = keys.map((k: any) => data[k]);

  const t = tpl(tp);
  const f = fn(t, keys);

  return f(...values);
}
