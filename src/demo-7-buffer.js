import Rx, {buffer, bufferTime, bufferCount} from 'rxjs';

const source = Rx.interval(300)
const source2 = Rx.interval(1000)

// const example = source.pipe(buffer(source2));
// const example = source.pipe(bufferTime(1000));
const example = source.pipe(bufferCount(3));

example.subscribe(console.log);
