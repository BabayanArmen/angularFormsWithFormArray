import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormComponent } from './pages/angular-form/angular-form.component';
import { FormsComponent } from './pages/forms/forms.component';

const routes: Routes = [
  {path: '', component: FormsComponent},
  {path: 'angularForm', component: AngularFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
