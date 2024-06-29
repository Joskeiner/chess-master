import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Amplify } from 'aws-amplify';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

Amplify.configure({
  Auth:{
    Cognito:{
      userPoolId: "",
      userPoolClientId: ""
    }
  }
})
