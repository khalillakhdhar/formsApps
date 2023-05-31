import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';
import { Ex1Component } from './ex1/ex1.component';

const routes: Routes = [
{ path: '', component:ReactiveComponent},
{ path: 'template',component:TemplateComponent},
{ path: 'ex1',component:Ex1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
