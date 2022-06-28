import Rx from 'rxjs'

// const observable = Rx.Observable
//   .create(observer => {
//     try {
//     observer.next('Tom');
//     observer.next('Jerry');
//     throw '遇到麻烦了'
//     observer.complete();
//     observer.next('车开了, 你没上车');      
//     } catch (err) {
//       observer.error(err)
//     }
//   })

// const observable = Rx.of(1,2,3,4,5)

// const observable = Rx.from(['Jerry', 'Anna', 2016, 2017, '30 days'])
// const observable = Rx.from('你好世界')
// const observable = Rx.from(new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Rxjs with Promise')
//   }, 1500);
// }));

// const fakeDom = {
//   addEventListener(type, cb, ...res) {
//     console.log({cb, type, res})
//     fakeDom.cb = cb
//   },
//   dispatchEvent(event){
//     console.log(event)
//     fakeDom.cb('test')
//   },
//   removeEventListener(type) {
//     console.log('remove ', type)
//   }
// }
// const observable = Rx.fromEvent(fakeDom, 'click')
// setTimeout(() => {
//   fakeDom.dispatchEvent('click')
// }, 1000)

const observable = Rx.timer(0, 1000)

const observer = {
  next(value) {
    console.log(value)
  },
  error(error) {
    console.log(error)
  },
  complete() {
    console.log('complete 完事了')
  }
};

// console.log('start')
// observable.subscribe(value => {
//   console.log(value)
// });
// console.log('end')

const subscription = observable.subscribe(observer);
setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
