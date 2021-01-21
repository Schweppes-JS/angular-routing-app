import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [HomeComponent, FormComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
