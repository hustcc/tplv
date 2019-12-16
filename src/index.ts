/**
 * nano tpl library
 * @param template
 * @param data
 */
export default function(template: string, data: object): string {
  const ks = Object.keys(data);
  const vs = ks.map((k: any) => data[k]);

  const t = `return \`${template}\``;
  const f = new Function(...ks, t);

  return f(...vs);
}
