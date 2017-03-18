import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { Headers, Response, RequestOptions } from '@angular/http';
import {Http} from '@angular/http';

import {
    DynamicFormService,
    DynamicFormControlModel,
    DynamicFormGroupModel,
    DynamicInputModel,
    DynamicCheckboxModel,
    DynamicTextAreaModel,
    DynamicSelectModel
} from "@ng2-dynamic-forms/core";
import {TranslateService} from '@ngx-translate/core';
import {ConfigSettings} from './config-settings.model';


@Injectable()
export class ConfigControlModelService {

  constructor(private translateService: TranslateService, private http: Http) { 

  }

  createControlModel(appName:string, settingsData:any, metaData:any):Observable<DynamicFormControlModel[]>{
    
    let formModel: DynamicFormControlModel[] = [];
    let checkBoxGroupModel : DynamicFormGroupModel = new DynamicFormGroupModel({
      id: "checkboxGroupId", legend : "", group: []},{grid:{container: "col-xs-10"}});

    let odd_inputGroupModel : DynamicFormGroupModel = new DynamicFormGroupModel({
      id: "oddInputGroupId", legend : "", group: []},{grid:{container: "col-xs-5"}});

    let even_inputGroupModel : DynamicFormGroupModel = new DynamicFormGroupModel({
      id: "evenInputGroupId", legend : "", group: []},{grid:{container: "col-xs-5"}});

    let pathAndLocationsGroupModel : DynamicFormGroupModel = new DynamicFormGroupModel({
      id: "pathAndLocationsGroupId", legend : "Path and Locations", group: []},{grid:{container: "col-xs-10"}});

    return Observable.create(observer => {
        this.translateService.get("Config."+appName).subscribe(() => {
          console.log("creating control model..");
          this.createControlModel_(appName, settingsData, metaData, checkBoxGroupModel, odd_inputGroupModel,even_inputGroupModel,
                                          pathAndLocationsGroupModel);  
          formModel.push(even_inputGroupModel);
          formModel.push(odd_inputGroupModel);
          if(checkBoxGroupModel.group.length !== 0){
            formModel.push(checkBoxGroupModel);
          }
          if(pathAndLocationsGroupModel.group.length !== 0){
            formModel.push(pathAndLocationsGroupModel);
          }
          observer.next(formModel);
          observer.complete();
      })
    });

  }

  private createControlModel_(appName:string, settingsData:any, metaData:any,
                              checkBoxGroupModel : DynamicFormGroupModel,
                              odd_inputGroupModel : DynamicFormGroupModel,even_inputGroupModel: DynamicFormGroupModel,
                              pathAndLocationsGroupModel: DynamicFormGroupModel):void{
      let inputGroupOddEven:boolean = true;
      for(let i=0; i< settingsData.settings.length; i++){
          let settingId = settingsData.settings[i].key;
          let settingLabel:any = this.translateService.instant("Config."+appName+"."+settingId+".Label");
          let settingErrorMsg:any = this.translateService.instant("Config."+appName+"."+settingId+".ErrorMsgs");

          let settingIdType = 0;
          let inputType = '';
          let settingIdValidators = {};
          let min, max, step:number;
          if(metaData[settingId] && metaData[settingId].type){
            settingIdType = metaData[settingId].type;
          }
          if(metaData[settingId] && metaData[settingId].validators){
            settingIdValidators = metaData[settingId].validators;
          }

          if(metaData[settingId] && metaData[settingId].min !== null){
            min = metaData[settingId].min;
          }  

          if(metaData[settingId] && metaData[settingId].max !== null){
            max = metaData[settingId].max;
          }

          if(metaData[settingId] && metaData[settingId].step !== null){
            step = metaData[settingId].step;
          }                              

          switch(settingIdType) {
              case 3:
                  inputType = 'number';
                  break;
              case 4:
                  inputType = 'password';
                  break;
              case 5:
                  inputType = 'range';
                  break;                  
          }                    

          let inputModel : any;
          if(settingIdType === 1){
            inputModel = new DynamicCheckboxModel({
                id: settingId, 
                label:settingLabel,
                validators: settingIdValidators,
                errorMessages : settingErrorMsg},check_box_css_config);
            checkBoxGroupModel.group.push(inputModel);            
          }else if(settingIdType === 2){
            //lets resolve the labels for options
            metaData[settingId].options.forEach(element => {
              element.label = this.translateService.instant(element.label);
            }); 
            inputModel = new DynamicSelectModel<string>({
                  id: settingId,
                  label : settingLabel,
                  options : metaData[settingId].options
                }, css_config);
            (inputGroupOddEven)?even_inputGroupModel.group.push(inputModel):odd_inputGroupModel.group.push(inputModel);
            inputGroupOddEven = !inputGroupOddEven;
          }else if(settingId === "location" || settingId === "path"){
            inputModel = new DynamicTextAreaModel({
                id: settingId, 
                label: settingLabel,
                readOnly:true
              },css_config);
            pathAndLocationsGroupModel.group.push(inputModel);
          }else{
            inputModel = new DynamicInputModel({
                id: settingId, 
                label: settingLabel,
                maxLength: 51,
                min:  min,
                max:  max,
                step: step,
                inputType: inputType,
                validators: settingIdValidators,
                readOnly:(settingId === "classname" || settingId === "filename"),
                errorMessages : settingErrorMsg},css_config);
            (inputGroupOddEven)?even_inputGroupModel.group.push(inputModel):odd_inputGroupModel.group.push(inputModel);
            inputGroupOddEven = !inputGroupOddEven;
          }

          inputModel.value = settingsData.settings[i].value;
        }
  }

  getSettingsForApp(appAlias:string, component:string):Observable<ConfigSettings>{
    return this.http.get("localapi/"+this.getAppName(appAlias)+".json").map((response: Response) => {
        return response.json() as ConfigSettings;
    });
  }

  getComponentsForApp(appAlias:string):Observable<any>{
    return this.http.get("localapi/components.json").map((response: Response) => {
        return response.json();
    });
  }

  getAppName(appAlias:string):string{
    return (APP_NAMES[appAlias])?APP_NAMES[appAlias] : appAlias;
  }
}

const css_config = {
      element: {control: "form-control", container: "form-group spacing-right-small", label: "control-label"},
      grid:{container: "col-xs-12", errors: "d-error d-error_pattern"}
};


const check_box_css_config = {
  grid:{container: "col-xs-6"}
};

const APP_NAMES = {
  Engine : "engine",
  NE :"norm",
  DSM : "dsm",
  USM : "usm"
}