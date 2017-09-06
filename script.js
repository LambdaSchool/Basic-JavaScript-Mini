const logger = () => console.log(`hi`);

const looper = () => {
 const message = 'I love JS!';
  for (let i = 0; i < 10; i++) {
    console.log(message);
  }
};

const greet = (name) => console.log(`Hello ${name}!`);

const yourName = 'Samer';

logger();
looper();
greet(yourName);
