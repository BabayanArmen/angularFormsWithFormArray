import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  @Input() user:User;
  firstName:string;
  lastName:string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(this.user) {
      this.firstName = this.user.firstName
      this.lastName = this.user.lastName;
    }
  }

  ngOnInit(): void {
  }

  setFirstName() {
    this.user.firstName = this.firstName;
  }

  setLastName() {
    this.user.lastName = this.lastName;
  }

}
