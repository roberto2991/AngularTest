import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstComponentComponent } from './components/first-component.component';
import { PipeTruncate } from './pipe/pipeTruncate';
import { Utility } from './utility/utility';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PipeTruncate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Utility],
  bootstrap: [AppComponent]
})
export class AppModule { }
