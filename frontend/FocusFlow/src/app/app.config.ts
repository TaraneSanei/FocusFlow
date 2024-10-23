import { ApplicationConfig, provideZoneChangeDetection, isDevMode, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JournalReducer } from './state/journal/journal.reducer';
import { JournalEffects } from './state/journal/journal.effects';
import { authInterceptor } from './auth.interceptor';
import { csrfInterceptor } from './csrf.interceptor';
import { CookieService } from 'ngx-cookie-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    CookieService,
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        csrfInterceptor
      ])
    ), 
    provideStore({
      journal: JournalReducer
    }), 
    provideEffects([
      JournalEffects
    ]), 
    provideStoreDevtools({ 
      maxAge: 25, 
      logOnly: !isDevMode() 
    }), 
    provideAnimationsAsync(),
  
  ]
};
