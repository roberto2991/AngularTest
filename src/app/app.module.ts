import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { CardComponent } from './shared/card/card.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { MeteoComponent } from './components/meteo/meteo.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { UsersComponent } from './features/users/users.component';
import { UserDetailsComponent } from './features/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PipeTruncate,
    AddUserComponent,
    DecoratorInputComponent,
    CardComponent,
    NavBarComponent,
    MeteoComponent,
    NavComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [Utility],
  bootstrap: [AppComponent]
})
export class AppModule { }
