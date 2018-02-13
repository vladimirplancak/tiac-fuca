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
import { PlayersInmemoryService } from './shared/services/players-inmemory.service';
import { PlayersFirebaseService } from './shared/services/players-firebase.service';
import { PlayersComponent } from './components/players/players.component';


const routes: Routes = [
  { path: "players", component: PlayersComponent },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "home" },
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersComponent
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
  providers: [
    {provide: PlayersFirebaseService, useClass: PlayersInmemoryService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
