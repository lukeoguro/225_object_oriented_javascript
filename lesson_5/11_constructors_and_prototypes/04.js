let foo = {
  a: 1,
};

Object.prototype.begetObject = function () {
  function O() { };
  O.prototype = this;
  return new O();
}

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true