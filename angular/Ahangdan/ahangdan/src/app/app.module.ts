import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MusicListPageComponent } from './music-list-page/music-list-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AuthService} from "./auth.service";
import {MusicLoaderService} from "./music-loader.service";
import {Router, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {GuardService} from "./guard.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterbarComponent,
    HomeComponent,
    AboutUsComponent,
    LoginFormComponent,
    RegisterFormComponent,
    MusicListPageComponent,
    MusicPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    AuthService,
    MusicLoaderService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
