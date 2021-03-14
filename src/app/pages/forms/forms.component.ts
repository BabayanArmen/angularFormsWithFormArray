import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  user:User = new User();
  pageCounter:number = 0;
  showResult:boolean = false;

  @ViewChild('myModal') myModal:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  openMyModal() {
    this.myModal.nativeElement.style.display = "block";
  }
  closeMyModal() {
    this.myModal.nativeElement.style.display = "none";
  }

  onSave() {
    this.closeMyModal()
    this.showResult = true;
  }

}
