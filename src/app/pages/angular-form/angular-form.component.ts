import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.scss']
})
export class AngularFormComponent implements OnInit {
  pageCounter:number = 0;
  showResult:boolean = false;
  form: FormGroup;

  user:User = new User();

  @ViewChild('myModal') myModal:ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      city: new FormControl('', [Validators.required]),
      skills: new FormArray([]),
    })
  }

  openMyModal() {
    this.myModal.nativeElement.style.display = "block";
  }
  closeMyModal() {
    this.myModal.nativeElement.style.display = "none";
  }

  onSave() {
    this.user.firstName = this.form.value.firstName;
    this.user.lastName = this.form.value.lastName;
    this.user.email = this.form.value.email;
    this.user.phoneNumber = this.form.value.phoneNumber;
    this.user.age = this.form.value.age;
    this.user.city = this.form.value.city;
    this.user.skills = this.form.value.skills;
    this.closeMyModal()
    this.showResult = true;
    this.form.reset();
    this.pageCounter = 0;
  }

}
