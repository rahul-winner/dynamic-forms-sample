import {Component} from '@angular/core';
import {BaseConfigComponent} from '../base-config.abstract.component';

@Component({
  selector: 'ne-configurations',
  templateUrl: './normalization-configurations.component.html'
})
export class NormalizationConfigurationsComponent  extends BaseConfigComponent {

  constructor() {
    super("NE", NEConfigMetaData);
  }
}

const NEConfigMetaData = {
  "classname" :{type : 0,validators : {}},
  "filename" : {type : 0,validators : {}},
  "multiTenant" : {type : 1,validators : {}},
  "location" : {type : 0,validators : {}},
  "path" : {type : 0,validators : {}},
  "com_sys_name" : {type : 0,validators : {}},
  "com_sys_system_RpcQueue" : {type : 0,validators : {}},
  "com_sys_system_BatchMaxThreads" : {type : 0,validators : {}},
  "api_MaxBackupIndex" : {type : 3,min:0, validators : {}},
  "com_sys_system_RetryTimeInterval" : {type : 3,min:0, validators : {
                    "required": null,
                    "maxLength": 5
                }},
  "continuous_MaxBackupIndex" : {type : 3,min:0, validators : {}},
  "com_sys_system_DefnCheckInterval" : {type : 3,min:0, validators : {}},
  "com_sys_system_ContinuousHistoryInterval" : {type : 3,min:0, validators : {}},
  "com_sys_system_DataCheckInterval" : {type : 3,min:0, validators : {}},
  "com_sys_system_ContinuousEventsThreshold" : {type : 3,min:1, validators : {}},
  "com_sys_system_ContinuousTimeThreshold" : {type : 3,min:1, validators : {}},
  "job_MaxBackupIndex" : {type : 3,min:0, validators : {}},
  "com_sys_system_BatchMaxInstancePerThread" : {type : 5,min:1, max:9999999,validators : {}},
  "api_MaxFileSize" : {type : 5,min:0, max:50,validators : {}},
  "job_MaxFileSize" : {type : 5,min:0, max:50,validators : {}},
  "com_sys_system_XRpcQueue" :{type : 2,
      options :[
        {
          label:"Config.NE.com_sys_system_RpcQueue.Option.1",
          value: "0"
        },
        {
          label:"Config.NE.com_sys_system_RpcQueue.Option.2",
          value: "390698"
        },
        {
          label:"Config.NE.com_sys_system_RpcQueue.Option.3",
          value: "390699"
        }        
      ],
      validators : {}},
  "com_sys_system_ContinuousMaxThreads":{type : 0,validators : {}},
  "com_sys_system_FailOverNotificationInterval" : {type : 3, min:0 ,validators : {}},
  "com_sys_system_CreateNewProducts" : {type : 1,validators : {}},
  "com_sys_system_Mode" : {type : 1,validators : {}},
  "com_sys_system_NormalizeAllInstances" : {type : 1,validators : {}},
  "com_sys_system_InlineErrorHandling" : {type : 1,validators : {}},
  "VersionRollup_RulePriority" :{type:1, validators:{}},
  "com_sys_system_DeleteUnmanagedInstances" : {type:1},
  "com_sys_user_data_merged" : {type:1},
  "com_sys_system_FailOverStatusInterval" : {type : 3, min:0 ,validators : {}},
  "continuous_level" : {type:2,
                    options :[
                          {label: "Config.NE.continuous_level.Option.1",value: "Fatal"},
                          {label: "Config.NE.continuous_level.Option.2",value: "Error"},
                          {label: "Config.NE.continuous_level.Option.3",value: "Warn"},
                          {label: "Config.NE.continuous_level.Option.4",value: "Info"},
                          {label: "Config.NE.continuous_level.Option.5",value: "Debug"}
                      ]},
  "api_level" : {type:2,
                    options :[
                          {label: "Config.NE.api_level.Option.1",value: "Fatal"},
                          {label: "Config.NE.api_level.Option.2",value: "Error"},
                          {label: "Config.NE.api_level.Option.3",value: "Warn"},
                          {label: "Config.NE.api_level.Option.4",value: "Info"},
                          {label: "Config.NE.api_level.Option.5",value: "Debug"}
                      ]},
  "job_level" : {type:2,
                    options :[
                          {label: "Config.NE.job_level.Option.1",value: "Fatal"},
                          {label: "Config.NE.job_level.Option.2",value: "Error"},
                          {label: "Config.NE.job_level.Option.3",value: "Warn"},
                          {label: "Config.NE.job_level.Option.4",value: "Info"},
                          {label: "Config.NE.job_level.Option.5",value: "Debug"}
                      ]},
  "com_sys_system_Enabled" : {type:2,
                    options :[
                          {label: "Config.NE.com_sys_system_Enabled.Option.1",value: "EVERYTHING ON"},
                          {label: "Config.NE.com_sys_system_Enabled.Option.2",value: "CTI ONLY"},
                          {label: "Config.NE.com_sys_system_Enabled.Option.3",value: "OFF"}
                      ]},                      
}
