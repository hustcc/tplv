import render from '../src';

describe('tplv', () => {
  test('simple', () => {
    const template = '${ name }, ${value}\n(${percent} | Top ${array[2]})';
    const data = {
      name: 'Hangzhou',
      value: 1200,
      percent: '13%',
      array: [1, 2, 3, 4],
    };

    expect(render(template, data)).toBe(`Hangzhou, 1200
(13% | Top 3)`);
  });
});
