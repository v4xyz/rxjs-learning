import Rx, {skip, take, takeLast, first, last, concatWith, mergeWith} from 'rxjs';

const source = Rx.interval(1000);
// const example = source.pipe(skip(3));
// const example = source.pipe(take(6)).pipe(takeLast(2));
// const example = source.pipe(take(6)).pipe(first());
// const example = source.pipe(take(6)).pipe(last());

// const source2 = Rx.of(3);
// const source3 = Rx.of(4, 5, 6);
// const example = source.pipe(take(3)).pipe(concatWith(source2, source3)); // rxjs 7开始 concatWith代替了concat

const source2 = Rx.interval(300).pipe(take(6));
const example = Rx.interval(500).pipe(take(3)).pipe(mergeWith(source2)); // rxjs 7开始 mergeWith代替了merge

example.subscribe(console.log);
