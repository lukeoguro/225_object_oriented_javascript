let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

Ninja.prototype.swing = function () {
  this.swung = true;
  return this;
}

console.log(ninjaA.swing().swung);      // must log true
console.log(ninjaB.swing().swung);      // must log true