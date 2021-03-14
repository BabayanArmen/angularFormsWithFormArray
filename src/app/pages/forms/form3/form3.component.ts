import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {
  @Input() user:User;
  age:number;
  city:string;
  skill:string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(this.user) {
      // console.log(changes);
      console.log(this.user);
      this.age = this.user.age;
      this.city = this.user.city;
    }
  }

  ngOnInit(): void {
  }

  setAge() {
    this.user.age = this.age;
  }
  setCity() {
    this.user.city = this.city;
  }
  addSkill() {
    this.user.skills.push(this.skill);
    this.skill = '';
  }
  onRemoveSkill(skill) {
    this.user.skills = this.user.skills.filter(el => el != skill);
  }

}
