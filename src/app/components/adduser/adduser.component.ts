import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../../service/courses.service';

@Component({
  selector: 'app-adduser',
  imports: [CommonModule,FormsModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.scss'
})
export class AdduserComponent implements OnInit{
  username:string;
  constructor(private CoursesService :CoursesService){

  }

  ngOnInit(){
     this.CoursesService.StatusUpdate.subscribe((data)=>{
      alert(data)
    })
  }

  addusername(){
    this.CoursesService.addnewuser(this.username,'active')
  }
}
