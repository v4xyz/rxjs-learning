function Producer() {
  this.listeners = [];
};

Producer.prototype.addListener = function(listener) {
  this.listeners.push(listener);
};

Producer.prototype.removeListener = function(listener) {
  this.listener.splice(this.listener.indexOf(listener), 1)
};

Producer.prototype.notify = function(message) {
  this.listeners.forEach(listener => {
    listener(message)
  });
};

const egghead = new Producer();

function listener1(message) {
  console.log(message + 'from listener1');
}

function listener2(message) {
  console.log(message + 'from listener2');
}

egghead.addListener(listener1);
egghead.addListener(listener2);

egghead.notify('A new course!!')