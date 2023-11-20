import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponentComponent,
    NavbarComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbCollapseModule, 
    RouterLink, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
