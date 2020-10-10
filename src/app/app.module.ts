import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component.component';
import {PipeTruncate} from './pipe/pipeTruncate';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PipeTruncate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
