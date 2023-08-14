// let ladder = {
//   step: 0,
//   up: function () {
//       this.step++;
//   },
//   down: function () {
//       this.step--;
//   },
//   showStep: function () { // показывает текущую ступеньку
//       alert(this.step);
//   }
// };
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep();
