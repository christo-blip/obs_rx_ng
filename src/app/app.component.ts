import { Component,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservSubscribComponent } from './observ-subscrib/observ-subscrib.component';
import { FetchusingHttpobservableComponent } from './fetchusing-httpobservable/fetchusing-httpobservable.component';
import { InheritanceCSSComponent } from './inheritance-css/inheritance-css.component';
import { ZindexComponent } from './zindex/zindex.component';
import { FlexGridComponent } from './flex-grid/flex-grid.component';
import { KeyframeComponent } from './keyframe/keyframe.component';
import { PesudoclassElementComponent } from './pesudoclass-element/pesudoclass-element.component';
import { CssvariableComponent } from './cssvariable/cssvariable.component';
import { PxrememvwpercentageComponent } from './pxrememvwpercentage/pxrememvwpercentage.component';
import { FloatComponent } from "./float/float.component";
import { ObservableVSPromiseComponent } from './observable-vspromise/observable-vspromise.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './task-store/task.reducer';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Task } from './models/task_model';
import { Store } from '@ngrx/store';
import { selectAllTasks, selectIcompleteTasksCount } from './task-store/task.selectors';
import { addTask, removeTask,toggleTaskCompletion } from './task-store/task.actions';
import {FormsModule} from '@angular/forms';
import { SubscribeinputComponent } from './subscribeinput/subscribeinput.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ReactivebookformsComponent } from './reactivebookforms/reactivebookforms.component';
import { SubscribemethodComponent } from './subscribemethod/subscribemethod.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { JobScreenerComponent } from './components/job-screener/job-screener.component';
import { CourseserviceComponent } from './components/courseservice/courseservice.component';
import { ViewchildchildrenComponent } from './components/viewchildchildren/viewchildchildren.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PromiseComponent } from './categories/promise/promise.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ObservSubscribComponent, FetchusingHttpobservableComponent, InheritanceCSSComponent, ZindexComponent, FlexGridComponent, 
    KeyframeComponent,PesudoclassElementComponent, CssvariableComponent, PxrememvwpercentageComponent, FloatComponent, ObservableVSPromiseComponent
  ,CommonModule,FormsModule,SubscribeinputComponent,FormbuilderComponent,ReactivebookformsComponent, SubscribemethodComponent,QuestionnaireComponent,JobScreenerComponent
   ,CourseserviceComponent,ViewchildchildrenComponent,UserlistComponent,NavbarComponent,PromiseComponent 
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
//   title = 'obs_rx_ng';
//   newTaskDescription = '';

//   allTask$ : Observable<Task[]>;
//   incompleteTaskCount$ : Observable<number>;

//   constructor(private store:Store){
//  this.allTask$ = this.store.select(selectAllTasks);
//  this.incompleteTaskCount$ = this.store.select(selectIcompleteTasksCount);
//   }

//   addTask(){
//     const newTask : Task ={
//       id:Date.now().toString(),
//       descritpiton: this.newTaskDescription,
//       completed:false
//     }
//     this.store.dispatch(addTask({task:newTask}));
//     this.newTaskDescription='';

//   }

//   removeTask(taskId:string){
//     this.store.dispatch(removeTask({taskId}));
//   }

//   toggleComplete(taskId:string){
//     this.store.dispatch(toggleTaskCompletion({taskId}))
//   }
constructor(){}



}
