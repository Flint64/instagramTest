import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';

// import { Instafeed } from '../../node_modules/angular-instafeed';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // Instafeed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
