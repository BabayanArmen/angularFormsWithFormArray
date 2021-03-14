export class User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  age: number;
  city: string;
  skills:string[];

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNumber = '';
    this.age = null;
    this.city = '';
    this.skills = [];
  }
}
