// const sayHello = function(){
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

//const sayHello = () => console.log('Hello');

// const sayHello = () => 'Hello';
// console.log(sayHello);

// const sayHello = () => ({msg : 'Hello'});
// console.log(sayHello());

//const sayHello = name => console.log(`Hello ${this.name}`);
//const sayHello = (name, age) => console.log(`Hello ${name} age ${age}`);

const users = ['sduip','rimi','souvik'];
// const nameLengths = users.map(function(name){
//     return name.length;
// });

// const nameLengths = users.map((name) => {
//     return name.length;
// });

const nameLengths = users.map(name => name.length);
console.log(nameLengths);

//sayHello("sudip", 24);