function makeCar(accelerateRate, decelerateRate) {
  return {
    speed: 0,
    accelerateRate,
    decelerateRate,
    accelerate() {
      this.speed += this.accelerateRate;
    },
    brake() {
      if (this.speed < this.decelerateRate) {
        this.speed = 0;
      } else {
        this.speed -= this.decelerateRate;
      }
    }
  }
}

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);
