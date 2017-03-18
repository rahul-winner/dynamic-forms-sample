import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { ConfigurationsComponent } from './configurations.component';
import { ReactiveFormsModule } from '@angular/forms';

import {DynamicFormService} from "@ng2-dynamic-forms/core";
import { DynamicFormsUIStyleModule } from "../ng2-dynamic-forms-ui-style/dynamic-forms-ui-style.module";
import {EngineConfigurationsComponent} from './engine-configurations/engine-configurations.component';
import {NormalizationConfigurationsComponent} from './normalization-configurations/normalization-configurations.component';
import {DsmConfigComponent} from './dsm-config/dsm-config.component';
import {UsmConfigComponent} from './usm-config/usm-config.component';
import {ConfigControlModelService} from './config-control-model.service';


@NgModule({
  imports: [
    CommonModule,
    ConfigurationsRoutingModule,
    ReactiveFormsModule,
    DynamicFormsUIStyleModule
  ],
  declarations: [ConfigurationsComponent, 
                  EngineConfigurationsComponent,
                  NormalizationConfigurationsComponent,
                  UsmConfigComponent,
                  DsmConfigComponent],
  providers :[ConfigControlModelService]                
})
export class ConfigurationsModule { 
  constructor(private injector: Injector, 
                private dynamicFormService : DynamicFormService) {
    ConfigurationsServiceLocator.injector = this.injector;
    ConfigurationsServiceLocator.dynamicFormService = this.dynamicFormService;
  }
}

export class ConfigurationsServiceLocator {
  static injector: Injector;
  static dynamicFormService : DynamicFormService
}
