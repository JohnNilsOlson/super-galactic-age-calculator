export class Mercury {
  constructor(age, relativeYear, relativeAge) {
    this.age = age;
    this.relativeYear = .24;
  }

  calcAge() {
    this.relativeAge = Math.round(this.age * this.relativeYear);
  }
}