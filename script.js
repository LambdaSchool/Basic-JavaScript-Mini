/*
var logger = function() {
  var message = 'hi';
  console.log(message);
};
*/
const logger = () => {
  let message = 'hi';
  console.log(message);
}





/*
var looper = function() {
  var message = 'I love JS!';
  // for (var i = 0; i < 10; i++) {
  for (let i = 0; i < 10; i++) {
    console.log(message);
  }
};
*/
const looper = () => {
  let message = 'I love JS!';
  for (let i = 0; i < 10; i++) {
    console.log(message);
  }
}





/*
var greet = function(name) {
  var greeting = 'Hello ' + name + '!';
  console.log(greeting);
};
*/
const greet = (name) => {
  let greeting = 'Hello ${name}!';
  console.log(greeting);
}





//var yourName = 'put your name in here';
var yourName = 'Mathew"

logger();
looper();
greet(yourName);
