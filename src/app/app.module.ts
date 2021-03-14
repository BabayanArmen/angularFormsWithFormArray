import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './pages/forms/forms.component';
import { Form1Component } from './pages/forms/form1/form1.component';
import { Form2Component } from './pages/forms/form2/form2.component';
import { Form3Component } from './pages/forms/form3/form3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFormComponent } from './pages/angular-form/angular-form.component';
import { Page1Component } from './pages/angular-form/page1/page1.component';
import { Page2Component } from './pages/angular-form/page2/page2.component';
import { Page3Component } from './pages/angular-form/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    AngularFormComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
