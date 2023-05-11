import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentUnoComponent } from './component-uno/component-uno.component';
import { ComponentDuoComponent } from './component-duo/component-duo.component';
import { ComponentTrioComponent } from './component-trio/component-trio.component';
import { ComponentQuatroComponent } from './component-quatro/component-quatro.component';
import { ComponentCinquoComponent } from './component-cinquo/component-cinquo.component';

const routes: Routes = [
  {path:'',component:ComponentUnoComponent},
  {path:'component-duo',component:ComponentDuoComponent},
  {path:'component-trio',component:ComponentTrioComponent},
  {path:'component-quatro',component:ComponentQuatroComponent},
  {path:'component-cinquo',component:ComponentCinquoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
