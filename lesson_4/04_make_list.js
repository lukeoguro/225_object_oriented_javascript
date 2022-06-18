function makeList() {
  let list = [];
  return function (newItem) {
    if (newItem === undefined && list.length === 0) {
      console.log('The list is empty.');
    } else if (newItem === undefined) {
      list.forEach(item => console.log(item));
    } else {
      let index = list.indexOf(newItem);
      if (index === -1) {
        list.push(newItem);
        console.log(`${newItem} added!`);
      } else {
        list.splice(index, 1);
        console.log(`${newItem} removed!`);
      }
    }
  }
}

let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book