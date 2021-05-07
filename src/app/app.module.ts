import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';

const appRoute:Routes=[
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'data', component:DataComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
