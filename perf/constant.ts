export const TEMPLATE = '${ name }, ${value}\n(${percent} | Top ${array[2]})';

export const DATA = {
  name: 'Hangzhou',
  value: 1200,
  percent: '13%',
  array: [1, 2, 3, 4],
};

export const RESULT = `Hangzhou, 1200
(13% | Top 3)`;
