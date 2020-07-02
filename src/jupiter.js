export class Jupiter {
  constructor(age) {
    this.age = age;
    this.relativeYear = 11.86;
  }

  calcAge() {
    this.relativeAge = Math.round(this.age * this.relativeYear);
  }

  calcRemaining() {
    this.yearsRemaining = Math.round((71 * this.relativeYear) - this.relativeAge);
  }
}