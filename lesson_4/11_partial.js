function greet(str1, str2) {
  str1 = str1[0].toUpperCase() + str1.slice(1);
  console.log(`${str1}, ${str2}!`);
}

greet('howdy', 'Joe');
// Howdy, Joe!
greet('good morning', 'Sue');
// Good morning, Sue!

function partial(primary, arg1) {
  return function (arg2) {
    return primary(arg1, arg2);
  }
}

let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'hi');

sayHello('Brandon');
sayHi('Sarah');