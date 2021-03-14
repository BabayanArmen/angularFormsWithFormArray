import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
  @Input() user:User;
  email:string;
  phone:string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(this.user) {
      this.email = this.user.email;
      this.phone = this.user.phoneNumber;
    }
  }

  ngOnInit(): void {
  }

  setEmail() {
    this.user.email = this.email;
  }

  setPhone() {
    this.user.phoneNumber = this.phone;
  }

}
