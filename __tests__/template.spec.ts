import render from '../src';
// use jest-raw-loader to load
// @ts-ignore
import template from './template.tpl';

describe('tplv', () => {
  test('template', () => {
    const data = {
      list: [
        { user: 'hustcc', site: 'https://atool.vip' },
        { user: 'somebody', site: 'https://example.com' },
      ],
    };

    expect(render(template, data)).toBe(`<ul>
<li>user: hustcc, site: https://atool.vip</li>
<li>user: somebody, site: https://example.com</li>
</ul>
`);
  });
});
