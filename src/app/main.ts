// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../app/app.component';
import { provideStore } from '@ngrx/store';
import { taskReducer } from '../app/task-store/task.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ tasks: taskReducer })
  ]
}).catch(err => console.error(err));
