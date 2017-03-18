import { Component } from '@angular/core';
import {BaseConfigComponent} from '../base-config.abstract.component';

@Component({
  selector: 'app-dsm-config',
  templateUrl: './dsm-config.component.html'
})
export class DsmConfigComponent extends BaseConfigComponent {
  constructor() {
    super("DSM", DSMConfigMetaData );
  }

}

const DSMConfigMetaData = {
  "multi" : {type:1},
  "DSM_level" : {type:2, options : [
      {label: "Config.DSM.DSM_level.Option.1",value: "Error"},
      {label: "Config.DSM.DSM_level.Option.2",value: "Info"},
      {label: "Config.DSM.DSM_level.Option.3",value: "Debug"},
      {label: "Config.DSM.DSM_level.Option.4",value: "Warn"},
      {label: "Config.DSM.DSM_level.Option.5",value: "Trace"},
      {label: "Config.DSM.DSM_level.Option.6",value: "Fatal"}
  ]},
  "override_password" : {type : 4,validators : {}}, 
  "DSM_MaxBackupIndex" : {type : 3,min:0, validators : {}}, 
}
