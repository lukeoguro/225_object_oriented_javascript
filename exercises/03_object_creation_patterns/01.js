// name property added to make objects easier to identify
const foo = { name: 'foo' };
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

foo.ancestors = function () {
  let list = [];
  let ancestor = Object.getPrototypeOf(this);

  do {
    if (ancestor.name) list.push(ancestor.name);
    ancestor = Object.getPrototypeOf(ancestor);
  } while (ancestor);

  list.push('Object.prototype');
  return list;
}

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']