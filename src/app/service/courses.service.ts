import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Course } from '../models/task_model';
import { Observable } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  private baseUrl = 'https://smartcertify-api.azurewebsites.net/api';
  StatusUpdate=new EventEmitter<string>();

  constructor(private http: HttpClient, private loggingservice:LoggingService) { }

  getCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl+ '/courses');
  }

  changecolor(color:string){
    console.log(color)
  }

  users=[{
name:'Arun',status:'active'},
  {name:'Varun',status:'active'},
  {name:'Kishore',status:'active'},]

    addnewuser(name:string,status:string){
      this.users.push({name,status})

    }


    updatestatus(id,status){
      this.users[id].status=status;
      this.StatusUpdate.emit(status)
      this.loggingservice.checkservie();
    }

}
