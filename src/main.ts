//import { platformBrowser } from '@angular/platform-browser';
//import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './app/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);