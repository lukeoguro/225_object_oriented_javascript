function makeCounterLogger(start) {
  return function (finish) {
    if (start < finish) {
      for (let i = start; i <= finish; i += 1) {
        console.log(i);
      }
    } else {
      for (let i = start; i >= finish; i -= 1) {
        console.log(i);
      }
    }
  }
}

let countLog = makeCounterLogger(5);

countLog(8);
// 5
// 6
// 7
// 8

countLog(2);
// 5
// 4
// 3
// 2