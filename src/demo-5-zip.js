import Rx, { take, combineLatest, withLatestFrom, map, zipWith } from 'rxjs';

const source = Rx.interval(500).pipe(take(3));
const newest = Rx.interval(300).pipe(take(6));

// const example = combineLatest(newest, source).pipe(map(([x, y]) => (x+y)));
// const example = source.pipe(zipWith(newest, (x, y) => (x+y)));

// example.subscribe(console.log);

const main = Rx.from('hello').pipe(zipWith(Rx.interval(500), (x, y) => x));
const some = Rx.from([3, 4, 5]).pipe(zipWith(Rx.interval(300), (x, y) => x));

main.pipe(withLatestFrom(some))
	.subscribe(console.log);
