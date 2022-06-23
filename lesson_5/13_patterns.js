let Point = function (x = 0, y = 0) {            // capitalized constructor name as a convention
  this.x = x;                                   // initialize states with arguments
  this.y = y;                                   // 0 as default value
};

Point.prototype.onXAxis = function () {  // shared behaviors added to constructor's prototype property
  return this.y === 0;
};

Point.prototype.onYAxis = function () {  // these methods are added one by one
  return this.x === 0;
};

Point.prototype.distanceToOrigin = function () {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
};

let point1 = new Point(30, 40);         // use new to create objects
console.log(point1.distanceToOrigin());              // 50
console.log(point1 instanceof Point);
console.log(point1.constructor === Point);
console.log(point1.__proto__ === Point.prototype);
console.log(Object.getPrototypeOf(point1) === Point.prototype);
console.log(Point.prototype.isPrototypeOf(point1));


function Point2() {
  this.a = 0;
  this.b = 0;
}

Point2.prototype = {
  hello: "world",
}

Point2.prototype.constructor = Point2;

let point2 = new Point2;
console.log(point2.hello === 'world');
console.log(point2.constructor === Point2);
console.log(Object.getPrototypeOf(point2) === Point2.prototype);