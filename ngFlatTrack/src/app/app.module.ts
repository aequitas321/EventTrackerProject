import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlatTrackComponent } from './components/flat-track/flat-track.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RacePipePipe } from './pipes/race-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlatTrackComponent,
    NavBarComponent,
    RacePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FlatTrackComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
