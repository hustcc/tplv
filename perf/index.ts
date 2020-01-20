import * as Benchmark from 'benchmark';
import { render, compile } from '../src';
import { DATA, TEMPLATE } from './constant';

// compile render fn
const fn = compile(TEMPLATE, Object.keys(DATA));

new Benchmark.Suite()
  .add('render', function() {
    render(TEMPLATE, DATA);
  })
  .add('compile', function() {
    fn(DATA);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    const fast = this.filter('fastest');
    const slow = this.filter('slowest');

    const fastName = fast.map('name');
    const slowName = slow.map('name');
    const ratio = (fast.map('hz') / slow.map('hz')).toFixed(3);

    console.log(`${fastName} is ${ratio}x faster then ${slowName}.`);
  })
  .run({ async: true });
