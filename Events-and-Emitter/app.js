var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere saying hello.');
})

emtr.on('greet', () => {
    console.log('Greetings given to you!');
})

emtr.emit('greet');