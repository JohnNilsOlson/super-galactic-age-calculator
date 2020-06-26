export class Jupiter {
  constructor(age, relativeYear, relativeAge) {
    this.age = age;
    this.relativeYear = 11.86;
  }

  calcAge() {
    this.relativeAge = Math.round(this.age * this.relativeYear);
  }
}