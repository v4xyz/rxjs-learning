import Rx from 'rxjs';

const people = Rx.of('Tom', 'Jerry');

function map(source, callback) {
  return Rx.Observable.create((observer) => {
    return source.subscribe(
      value => {
        try {
          observer.next(callback(value))
        } catch(err) {
          observer.error(err);
        }
      },
      err => {
        observer.error(err);
      },
      () => {
        observer.complete();
      }
    );
  });
}

const helloPeople = map(people, item => `${item} Helllo~`);

people.subscribe(console.log);
helloPeople.subscribe(console.log);
