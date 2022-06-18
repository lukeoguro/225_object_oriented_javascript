function newStack() {
  let stack = [];

  return {
    push(value) {
      stack.push(value);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      for (let item of stack) {
        console.log(item);
      }
    },
  }
}