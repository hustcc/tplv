import { render, compile } from '../src';

const TEMPLATE = '${ name }, ${value}\n(${percent} | Top ${array[2]})';
const DATA = {
  name: 'Hangzhou',
  value: 1200,
  percent: '13%',
  array: [1, 2, 3, 4],
};
const RESULT = `Hangzhou, 1200
(13% | Top 3)`;

describe('tplv template string', () => {
  test('render', () => {
    expect(render(TEMPLATE, DATA)).toBe(RESULT);
  });

  test('compile', () => {
    const fn = compile(TEMPLATE, ['name', 'value', 'percent', 'array']);
    expect(fn(DATA)).toBe(RESULT);
  });
});
