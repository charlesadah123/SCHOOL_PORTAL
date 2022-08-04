import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterComponent } from './after/after.component';
import { FieldsComponent } from './fields/fields.component';
import { NextComponent } from './next/next.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [/*
  { path: 'first-nav', component: RegisterComponent },
  { path: 'second-nav', component: FieldsComponent },
  { path: 'next-nav', component: NextComponent },
  { path: 'after-nav', component: AfterComponent },
  { path: 'heroku-nav', component: HerokuComponent }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
