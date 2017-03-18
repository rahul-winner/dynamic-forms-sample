import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { ConfigurationsComponent } from './configurations.component';
import { ReactiveFormsModule } from '@angular/forms';

import {DynamicFormService} from "@ng2-dynamic-forms/core";
import { DynamicFormsBootstrapUIModule } from "@ng2-dynamic-forms/ui-bootstrap";
import {EngineConfigurationsComponent} from './engine-configurations/engine-configurations.component';
import {NormalizationConfigurationsComponent} from './normalization-configurations/normalization-configurations.component';

import {ConfigControlModelService} from './config-control-model.service';


@NgModule({
  imports: [
    CommonModule,
    ConfigurationsRoutingModule,
    ReactiveFormsModule,
    DynamicFormsBootstrapUIModule
  ],
  declarations: [ConfigurationsComponent, 
                  EngineConfigurationsComponent,
                  NormalizationConfigurationsComponent],
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
