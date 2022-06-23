function newPerson(name) {
  return Object.defineProperties({ name }, {
    log: {
      value() { console.log(this.name) },
      writable: false,
    }
  });
}

let me = newPerson('Shane Riley');
me.log();     // => Shane Riley
me.log = function () { console.log('Amanda Rose'); };
me.log();     // => Shane Riley