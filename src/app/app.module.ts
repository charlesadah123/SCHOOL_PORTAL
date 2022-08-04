import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  RouterModule } from '@angular/router';
 
import { FieldsComponent } from './fields/fields.component';
import { RegisterComponent } from './register/register.component';
import { NextComponent } from './next/next.component';
import { AfterComponent } from './after/after.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HerokuComponent } from './heroku/heroku.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { FirstContactComponent } from './first-contact/first-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginTwoComponent } from './login-two/login-two.component';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,
    FieldsComponent,
    RegisterComponent,
    NextComponent,
    AfterComponent,
    SidebarComponent,
    HerokuComponent,
    NavbarComponent,
    HeaderComponent,
    SidenavComponent,
    LoginComponent,
    FirstContactComponent,
    DashboardComponent,
    LoginTwoComponent
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'first-nav', component: FieldsComponent},
      {path: 'side-nav', component: SidebarComponent},
      {path: 'second-nav', component: NextComponent},
      {path: 'third-nav', component: AfterComponent},
      {path: 'heroku-nav', component: HerokuComponent}
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
