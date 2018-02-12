import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { Router, RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'

import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "home" },
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
