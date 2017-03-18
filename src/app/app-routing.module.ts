import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'configurations',
    loadChildren : 'app/configurations/configurations.module#ConfigurationsModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
