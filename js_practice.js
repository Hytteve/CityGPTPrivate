// var time = 0;

// var timer = setInterval(function(){
//     time += 2;
//     console.log(time +' seconds have passed');
//     if (time >5){
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

// function sayHi(){
//     console.log('Hi');
// }
// sayHi();

// function callFunction(fun){
//     fun();
// }


// var sayBye = function(){
//     console.log('Bye');
// }
// // sayBye();

// callFunction(sayBye);

// var stuff = require('./stuff');

// console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi,5));


// var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');

// var events = require('events');

// var util = require('util');

// var Person = function(name){
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var mary = new Person('mary');
// var ryu = new Person('ryu');

// var people = [james, mary, ryu];

// people.forEach(function(person){
//     person.on('speak', function(mssg){
//         console.log(person.name + ' said: ' + mssg);
//     });
// });

// james.emit('speak', 'hey dudes');
// ryu.emit('speak', 'I want a curry');

// var fs = require('fs');

// var readMe = fs.readFileSync('READMe.md', 'utf8');
// // console.log(readMe);

// fs.writeFileSync('writeMe.txt', readMe);

// var fs = require('fs');

// fs.readFile('READMe.md', 'utf8', function(err, data){
//     // console.log(data);
//     fs.writeFile('writeMe.txt', data, function(err, result){
//         if(err) console.log('error', err);
//     });
// });

// console.log('test');

// var fs = require('fs');

// fs.unlink('writeMe.txt', function(err, result){
//     if(err) console.log('error', err);
// });

// var fs = require('fs');

// fs.mkdirSync('stuff');

// fs.rmdirSync('stuff');

// fs.mkdir('stuff', function(){
//     fs.readFile('README.md', 'utf8', function(err, data){
//         fs.writeFile('./stuff/writeMe.txt', data, function(err, result){
//             if(err) console.log('error', err);
//         });
//     });
// } );

// fs.unlink('./stuff/writeMe.txt', function(){
//     fs.rmdir('stuff', function(err, result){
//         if(err) console.log('error', err);
//     });
// } );



