import { Component } from '@angular/core';
import {Router} from '@angular/router';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample App using Dynamic Forms';

  constructor(private _router: Router, private translateService: TranslateService) {

    let browserLang = translateService.getBrowserLang();
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    if(browserLang == null && browserLang === '' ){
      translateService.use('en');
    }else{
      translateService.use(browserLang);
    }
  }
}
