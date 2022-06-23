function createObject(obj) {
  function O() { }
  O.prototype = obj;
  return new O();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true