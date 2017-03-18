import {Component} from '@angular/core';
import {BaseConfigComponent} from '../base-config.abstract.component';

@Component({
  selector: 'engine-configurations',
  templateUrl: './engine-configurations.component.html'
})
export class EngineConfigurationsComponent extends BaseConfigComponent {
  
  constructor() {
    super("Engine", EngineConfigMetaData);
  }
}


const EngineConfigMetaData = {
  "App-Cache-Refresh-Initial-Delay" : {
                type : 3,
                min:0,
                validators : {
                    "required": null,
                    "maxLength": 5
                }
            },
  "App-Cache-Refresh-Interval" : {type : 3, min:0,validators : {}},
  "App-ChunkedItem-Allowed-Period-In-Cache" : {type : 3,min:0,validators : {}},
  "App-ChunkedItem-Cleanup-Initial-Delay":{type : 3,min:0,validators : {}},
  "App-ChunkedItem-Cleanup-Interval" :{type : 3,min:0, validators : {}},
  "App-Allow-Global-BSSO-Delete":{type : 1, validators : {}},
  "App-CIViewer-Graph-Limit" : {type : 3,min:0, validators : {}},
  "App-GQRecursion-Limit":{type : 3,min:0, validators : {}},
  "App-Hard-Delete-Only-If-Marked-For-Delete" : {type : 1,validators : {}},
  "App-Impact-Weight-Default" : {type : 3,min:0, validators : {}},
  "App-Inline-Normalization" : {type : 1, validators : {}, trueValueOption:"T", falseValueOption:"F"},
  "App-Log-File-Location" : {type : 0,validators : {}},
  "App-Log-File-Name" : {type : 0,validators : {}},
  "App-Logging-Level" : {type : 2,
    options :[
        {label: "Config.Engine.App-Logging-Level.Option.1",value: "FATAL"},
        {label: "Config.Engine.App-Logging-Level.Option.2",value: "ERROR"},
        {label: "Config.Engine.App-Logging-Level.Option.3",value: "WARN"},
        {label: "Config.Engine.App-Logging-Level.Option.4",value: "INFO"},
        {label: "Config.Engine.App-Logging-Level.Option.5",value: "DEBUG"}
    ],
    validators : {}},
  "App-Log-Per-Thread" : {type : 1,validators : {}},
  "App-Max-Log-File-Size" : {type : 5,min:0, max:1024, validators : {}},
  "App-Max-Results-Per-Query" : {type : 3,min:0,validators : {}},
  "App-Number-Of-Backup-Files" : {type : 3,min:0,validators : {}},
  "App-Validate-Federation-Source" : {type : 1,validators : {}},
  "Event-Channel-Enabled" : {type : 1,validators : {}}
}
