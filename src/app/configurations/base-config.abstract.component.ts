import { Component, OnInit, Injector, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {TranslateStore} from '@ngx-translate/core/src/translate.store';
import {TranslateLoader} from '@ngx-translate/core/src/translate.loader';
import { Router} from '@angular/router';

import {
    DynamicFormService,
    DynamicFormControlModel
} from "@ng2-dynamic-forms/core";
import {ConfigControlModelService} from './config-control-model.service';
import {ConfigSettings} from './config-settings.model';
import {ConfigurationsServiceLocator} from './configurations.module';

export abstract class BaseConfigComponent implements OnInit {

  formModel: DynamicFormControlModel[] = [];
  formGroup: FormGroup;

  appComponents : Array<any>;

  protected formService: DynamicFormService; 
  protected translateService: TranslateService;
  protected controlModelService:ConfigControlModelService;
  private router:Router;

  constructor(private appName:string,private metaData:any) {
    this.router = ConfigurationsServiceLocator.injector.get(Router); 
    this.controlModelService = ConfigurationsServiceLocator.injector.get(ConfigControlModelService);
    this.translateService = ConfigurationsServiceLocator.injector.get(TranslateService);
    this.formService = ConfigurationsServiceLocator.dynamicFormService;
  }

  ngOnInit() {
    //Get components
    this.controlModelService.getComponentsForApp(this.appName).subscribe((compResults)=>{
      this.appComponents = compResults.components;
      //Get settings with first component
      this.getSettings(this.appComponents[0]);
    })
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  getSettings(appComponent) {
      this.controlModelService.getSettingsForApp(this.appName, appComponent).subscribe((settingsData)=>{
        console.log(settingsData);
        let configSettings:ConfigSettings = settingsData;
        //render the form controls model
        this.controlModelService.createControlModel(this.appName, configSettings, this.metaData).subscribe((data)=>{
          this.formModel = data;
          this.formGroup = this.formService.createFormGroup(this.formModel);
        });

      });
  }

  updatedSettings:Array<any> =[];

  save(){
    console.log("updated settings = "+JSON.stringify(this.updatedSettings));
  }

  onChangeComponent($event){
    this.formModel = [];
    //Get settings with selected component
    this.getSettings($event.target.value);
    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  onChange($event) {
    let updatedValue = {"key" : $event.model.name,"value" :$event.model.value, "form":"Configuration Component Setting"};

    this.updatedSettings = this.updatedSettings.filter(function(value, index, array){
      return value.key !== $event.model.name;
    });
    this.updatedSettings.push(updatedValue);
  }

}