import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: 'Residence', component: ResidencesComponentComponent },
  { path: '', redirectTo:"/Residence", pathMatch:'full'},
  { path: '**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }