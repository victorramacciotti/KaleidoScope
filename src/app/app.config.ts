import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
              provideRouter(routes), 
              provideHttpClient(),
              provideAuth0({

                domain: 'dev-7fvb7yro48pcduqm.us.auth0.com',
               
                clientId: 'mHwMrnhPwEHbleoJvE107fdUbi1BsD2f',
               
                authorizationParams: {
               
                redirect_uri: window.location.origin,
               
                },
               
                }),
            ]
};
