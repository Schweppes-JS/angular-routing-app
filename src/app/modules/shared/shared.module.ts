import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/Header/header.component';
import { NavBarComponent } from './components/NavBar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/Footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
