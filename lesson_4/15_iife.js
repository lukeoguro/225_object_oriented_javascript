function countdown(count) {
  (function output(n) {
    console.log(n);
    if (n === 0) {
      console.log('Done!');
    } else {
      output(n - 1);
    }
  })(count);
}

countdown(7);