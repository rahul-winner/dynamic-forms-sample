import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {DynamicFormService} from "@ng2-dynamic-forms/core";
import { HttpModule } from '@angular/http';
import {Headers, Http, BaseRequestOptions, RequestOptions} from '@angular/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';

import { DynamicFormsCoreModule } from "@ng2-dynamic-forms/core";
import { DynamicFormsBootstrapUIModule } from "@ng2-dynamic-forms/ui-bootstrap";
import { AppComponent } from './app.component';

// AoT compilation requires a reference to an exported function.
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/locale-', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsBootstrapUIModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

