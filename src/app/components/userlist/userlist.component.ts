import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../service/courses.service';
import { UserComponent } from '../user/user.component';
import { AdduserComponent } from '../adduser/adduser.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userlist',
  imports: [UserComponent,AdduserComponent,CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent implements OnInit{
  constructor(private courseservice:CoursesService){
this.displaylist()
  }

  users:{name:string,status:string}[]=[]
  ngOnInit(){

  }

  displaylist(){
    this.users=this.courseservice.users
  }

}
