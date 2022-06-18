function myBind(func, context) {
  return function (...args) {
    func.apply(context, args);
  }
}