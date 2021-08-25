import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterbarComponent} from './footerbar/footerbar.component';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {MusicListPageComponent} from './music-list-page/music-list-page.component';
import {MusicPageComponent} from './music-page/music-page.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AuthService} from "./services/auth.service";
import {MusicLoaderService} from "./services/music-loader.service";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {GuardService} from "./services/guard.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from '@angular/common/http';
import {TextboxComponent} from './textbox/textbox.component';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {MatIconModule} from '@angular/material/icon'

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
    MusicPageComponent,
    TextboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    NgxAudioPlayerModule,
    MatIconModule
  ],
  providers: [
    AuthService,
    MusicLoaderService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
