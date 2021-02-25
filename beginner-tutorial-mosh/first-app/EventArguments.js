/* Events Arguments */
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', (arg) => {  // e, eventArg
  console.log('Listener called!', arg);
})

// Raise an event
// emit: Making a noise, produce - signalling
emitter.emit('messageLogged', {
  id: 1, url: 'http://'
});

// Raise: logging (data: message)