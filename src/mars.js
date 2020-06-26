export class Mars {
  constructor(age, relativeYear, relativeAge) {
    this.age = age;
    this.relativeYear = 1.88;
  }

  calcAge() {
    this.relativeAge = Math.round(this.age * this.relativeYear);
  }

  calcRemiaing() {
    
  }
}