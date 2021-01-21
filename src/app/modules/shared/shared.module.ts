import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/Header/header.component';
import { NavBarComponent } from './components/NavBar/nav-bar.component';
import { ContentWrapperComponent } from './components/ContentWrapper/content-wrapper.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/Footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent,
    ContentWrapperComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    NavBarComponent,
    ContentWrapperComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
