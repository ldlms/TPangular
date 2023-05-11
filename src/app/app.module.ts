import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentUnoComponent } from './component-uno/component-uno.component';
import { ComponentDuoComponent } from './component-duo/component-duo.component';
import { ComponentTrioComponent } from './component-trio/component-trio.component';
import { ComponentQuatroComponent } from './component-quatro/component-quatro.component';
import { ComponentCinquoComponent } from './component-cinquo/component-cinquo.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ComponentUnoComponent,
    ComponentDuoComponent,
    ComponentTrioComponent,
    ComponentQuatroComponent,
    ComponentCinquoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
