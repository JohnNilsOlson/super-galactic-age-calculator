export class Mercury {
  constructor(age, relativeYear, relativeAge, yearsRemaining) {
    this.age = age;
    this.relativeYear = .24;
  }

  calcAge() {
    this.relativeAge = Math.round(this.age * this.relativeYear);
  }

  calcRemaining() {
    this.yearsRemaining = Math.round((71 * this.relativeYear) - this.relativeAge);
  }
}