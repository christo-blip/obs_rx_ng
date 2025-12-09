import { Component, Input } from '@angular/core';
import { CoursesService } from '../../service/courses.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input('user')user:{name:string,status:string};
  @Input('id')id:number;
  constructor(private course:CoursesService){}

  ngOnInit(){
   
  }

  addacitive(status){
    this.course.updatestatus(this.id,status)
  }
  
}
