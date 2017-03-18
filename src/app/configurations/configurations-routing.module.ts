import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ConfigurationsComponent} from './configurations.component';
import {EngineConfigurationsComponent} from './engine-configurations/engine-configurations.component';
import {NormalizationConfigurationsComponent} from './normalization-configurations/normalization-configurations.component';

const routes: Routes = [
  {
    path: '',
    component : ConfigurationsComponent,
    children :[
      {path : '',redirectTo : 'engine',pathMatch : 'full'},
      {path : 'engine',component: EngineConfigurationsComponent},
      {path : 'normalization',component: NormalizationConfigurationsComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ConfigurationsRoutingModule { }
