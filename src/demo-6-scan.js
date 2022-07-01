import Rx, { zipWith, scan } from 'rxjs';

const source = Rx.from('hello').pipe(zipWith(Rx.interval(600), (x, y) => x));
const example = source.pipe(scan((origin, next) => origin + next, ''));

example.subscribe(console.log)
