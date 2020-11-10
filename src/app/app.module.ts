import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstComponentComponent } from './components/first-component.component';
import { PipeTruncate } from './pipe/pipeTruncate';
import { Utility } from './utility/utility';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './components/add/add-user.component';
import { FormsModule } from '@angular/forms';
import { DecoratorInputComponent } from './components/decorator-input/decorator-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PipeTruncate,
    AddUserComponent,
    DecoratorInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Utility],
  bootstrap: [AppComponent]
})
export class AppModule { }
