import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompFbComponent } from './comp-fb/comp-fb.component';
import { ResultComponent } from './result/result.component';
import { WizCompComponent } from './wiz-comp/wiz-comp.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path:"home",component:WizCompComponent},
  {path:"facebook", component:CompFbComponent},
  {path:"result", component:ResultComponent},
  {path:"60197c9c2fa8e611b4c10fc7",component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
