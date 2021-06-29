import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeocomplyAppealComponent } from './geocomply-appeal/geocomply-appeal.component';
import { HomeComponent } from './home/home.component';
import { SteveJonesComponent } from './steve-jones/steve-jones.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'steveJones', component: SteveJonesComponent
  },
  {
    path: 'geoComplyAppeals', component: GeocomplyAppealComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
