import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from './material/material.module';
import { SteveJonesComponent } from './steve-jones/steve-jones.component';
import { GeocomplyAppealComponent } from './geocomply-appeal/geocomply-appeal.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SteveJonesComponent,
    GeocomplyAppealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
