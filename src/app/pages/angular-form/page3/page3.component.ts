import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {
  @Input() form:FormGroup;
  @ViewChild('skill') skillEl:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddSkill(skill) {
    let dublicate = this.form.value.skills.find(el => el==skill);
    if(!dublicate) {
      (this.form.get('skills') as FormArray).push(new FormControl(skill));
    }else{
      alert('Skill already added')
    }
    this.skillEl.nativeElement.value = '';
  }

  removeSkill(index) {
    (this.form.get('skills') as FormArray).removeAt(index)
  }

}
