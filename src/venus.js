export class Venus {
  constructor(age, relativeYear, relativeAge) {
    this.age = age;
    this.relativeYear = .62;
  }

  calcAge() {
    this.relativeAge = Math.round(this.age * this.relativeYear);
  }

  calcRemaining() {
    this.yearsRemaining = Math.round((71 * this.relativeYear) - this.relativeAge);
  }
}