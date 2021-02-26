import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { ListComponent } from './list/list.component';
import { EnterComponent } from './enter/enter.component'

const routes: Routes = [
  {component: ListComponent, path:'list'},
  {component: EnterComponent, path:'enter'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
