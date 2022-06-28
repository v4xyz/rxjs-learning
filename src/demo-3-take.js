import Rx from 'rxjs';

// const source = Rx.interval(1000);
// const example = source.pipe(Rx.take(3));
// const example = source.pipe(Rx.first());
// const example = source.pipe(Rx.takeUntil(Rx.timer(4000)));

var obs1 = Rx.interval(1000).pipe(Rx.take(5));
var obs2 = Rx.interval(500).pipe(Rx.take(2));
var obs3 = Rx.interval(2000).pipe(Rx.take(1));

var source = Rx.of(obs1, obs2, obs3);

var example = source.pipe(Rx.concatAll());

example.subscribe({
  next: value => {
    console.log(value)
  },
  error: err => {
    console.log(err)
  },
  complete: ()=> {
    console.log('完事了')
  }
});
