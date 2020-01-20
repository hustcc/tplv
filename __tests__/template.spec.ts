import { render, compile } from '../src';
// use jest-raw-loader to load
// @ts-ignore
import template from './template.tpl';

const RESULT = `<ul>
<li>user: hustcc, site: https://atool.vip</li>
<li>user: somebody, site: https://example.com</li>
</ul>
`;

describe('tplv template file', () => {
  test('render', () => {
    const data = {
      list: [
        { user: 'hustcc', site: 'https://atool.vip' },
        { user: 'somebody', site: 'https://example.com' },
      ],
    };

    expect(render(template, data)).toBe(RESULT);
  });

  test('compile', () => {
    const data = {
      list: [
        { user: 'hustcc', site: 'https://atool.vip' },
        { user: 'somebody', site: 'https://example.com' },
      ],
    };

    const fn = compile(template, ['list']);
    expect(fn(data)).toBe(RESULT);
  });
});
