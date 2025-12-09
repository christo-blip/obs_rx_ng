import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { questionnaireReducer } from './store/banking/reducer';
import { jobReducer } from './store/job-screener/job.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      StoreModule.forRoot({
        questionnaire: questionnaireReducer,
        job: jobReducer
      })
    )
  
  ]
};
