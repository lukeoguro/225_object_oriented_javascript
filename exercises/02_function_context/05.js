function myBind(func, context, ...args1) {
  return function (...args2) {
    func.apply(context, args1.concat(args2));
  }
}