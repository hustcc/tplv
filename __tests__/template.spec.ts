import render from '../src';
// @ts-ignore
import template from './template.tpl'; // use jest-raw-loader to load

describe('tplv', () => {
  test('template', () => {
    console.log(template);

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
