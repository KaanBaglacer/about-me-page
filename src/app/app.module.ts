import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppShellComponent} from './app-shell/app-shell.component';
import {NavbarComponent} from './app-shell/navbar/navbar.component';
import {ButtonComponent} from './shared/button/button.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {HomePageComponent} from './main/home-page/home-page.component';
import {AboutMeComponent} from './main/about-me/about-me.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent,
    NavbarComponent,
    ButtonComponent,
    HomePageComponent,
    AboutMeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
