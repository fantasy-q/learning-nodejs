/* Events Module */
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function () {
  console.log('Listener called!');
})

// Raise an event
// emit: Making a noise, produce - signalling
emitter.emit('messageLogged');
