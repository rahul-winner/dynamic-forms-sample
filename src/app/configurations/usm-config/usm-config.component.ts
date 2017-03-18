import { Component } from '@angular/core';
import {BaseConfigComponent} from '../base-config.abstract.component';

@Component({
  selector: 'app-usm-config',
  templateUrl: './usm-config.component.html'
})
export class UsmConfigComponent extends BaseConfigComponent {
  constructor() {
    super("USM", USMConfigMetaData );
  }

}

const USMConfigMetaData = {
  "multi" : {type:1},
  "perform": { type: 1, validators: {} },
  "Kit_level" : {type:2, options : [
      {label: "Config.EC.Events_level.Option.1",value: "Error"},
      {label: "Config.EC.Events_level.Option.2",value: "Info"},
      {label: "Config.EC.Events_level.Option.3",value: "Debug"},
      {label: "Config.EC.Events_level.Option.4",value: "Warn"},
      {label: "Config.EC.Events_level.Option.5",value: "Trace"},
      {label: "Config.EC.Events_level.Option.6",value: "Fatal"}
  ]},
  "Kit_MaxBackupIndex" : {type : 3,min:0, validators : {}},
  "override_assword" : {type : 4,validators : {}},
  "wait_in_secs" : {type : 3,min:0, validators : {}}, 
  "wait_interval" : {type : 3,min:0, validators : {}}    
}
