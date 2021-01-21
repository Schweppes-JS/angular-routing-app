import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTravelGuard } from './guards/user-travel.guard';
import { HomeComponent } from './modules/home/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [UserTravelGuard] },
  { path: 'home', component: HomeComponent, canActivate: [UserTravelGuard] },
  { path: 'account', component: HomeComponent, canActivate: [UserTravelGuard] },
  { path: 'accessories', component: HomeComponent, canActivate: [UserTravelGuard] },
  { path: '**', component: HomeComponent, canActivate: [UserTravelGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
