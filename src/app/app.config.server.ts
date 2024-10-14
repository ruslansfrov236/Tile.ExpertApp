import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
  HttpClientModule,
   
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
