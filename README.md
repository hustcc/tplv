# TPLV

> Nano(~170b) string template library, based on ES6 String template syntax.

[![npm Version](https://img.shields.io/npm/v/tplv.svg)](https://www.npmjs.com/package/tplv)
[![Build Status](https://github.com/hustcc/tplv/workflows/build/badge.svg)](https://github.com/hustcc/tplv/actions)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/tplv/badge.svg?branch=master)](https://coveralls.io/github/hustcc/tplv?branch=master)
[![npm License](https://img.shields.io/npm/l/tplv.svg)](https://www.npmjs.com/package/tplv)


## Install

```bash
$ npm i --save tplv
```


## Usage

 - simple template string

```ts
import render from 'tplv';

const template = '${ name }, ${value}(${percent} | Top ${array[2]})';

const data = {
  name: 'Hangzhou',
  value: 1200,
  percent: '13%',
  array: [1, 2, 3, 4]
};

render(template, data); // `Hangzhou, 1200(13% | Top 3)` will be got
```

 - complex template file

File `template.tpl`.

```text
<ul>
${
  list.map(l => (
    `<li>user: ${l.user}, site: ${l.site}</li>`
  )).join('\n')
}
</ul>
```

Use it to render the template.

```ts
import render from 'tplv';
import template from './template.tpl';

const data = {
  list: [
    { user: 'hustcc', site: 'https://atool.vip' },
    { user: 'somebody', site: 'https://example.com' },
  ],
};

render(template, data);
```



## License

MIT@[hustcc](https://github.com/hustcc).
