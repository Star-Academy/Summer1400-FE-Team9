import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from "./about-us/about-us.component";
import {FavListPageComponent} from "./fav-list-page/fav-list-page.component";
import {HomeComponent} from "./home/home.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {MusicListPageComponent} from "./music-list-page/music-list-page.component";
import {RegisterFormComponent} from "./register-form/register-form.component";

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'fav-list-page', component: FavListPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'music-list-page', component: MusicListPageComponent },
  { path: 'register-form', component: RegisterFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
