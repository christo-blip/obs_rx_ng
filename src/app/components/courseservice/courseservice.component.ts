import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/task_model';
import { CoursesService } from '../../service/courses.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TechFilterComponent } from '../tech-filter/tech-filter.component';
@Component({
  selector: 'app-courseservice',
  imports: [JsonPipe,CommonModule,FormsModule,TechFilterComponent],
  templateUrl: './courseservice.component.html',
  styleUrl: './courseservice.component.scss'
})
export class CourseserviceComponent implements OnInit{
  courses: Course[]=[];
  filteredCourses:Course[]=[];
  technologySelected:string='';
  onlyAvailableTest = false;
  userId:number=0;
  courseId:any;

  constructor(private courseService: CoursesService){
}


  techData=[
  {
        name:'Angular',
    image:'../../../assets/technologies/angular.svg',
  },
  {
    name:'React',
    image:'../../../assets/technologies/react.svg',
  },
  {
        name:'Azure',
    image:'../../../assets/technologies/azure.svg',
  },
  {    name:'.Net Core',
    image:'../../../assets/technologies/dotnet-core.svg',},
  {    name:'Javascript',
    image:'../../../assets/technologies/javascript.svg',},
  {    name:'Java',
    image:'../../../assets/technologies/java.svg',},
  {    name:'SQL',
    image:'../../../assets/technologies/sql.svg',},
  {    name:'React Native',
    image:'../../../assets/technologies/react-native.svg',},
  {    name:'AWS',
    image:'../../../assets/technologies/aws.svg',},
  {    name:'Docker',
    image:'../../../assets/technologies/docker.svg',},
]


  ngOnInit():void{
    this.loadCourses();
  }

  loadCourses(){
    this.courseService.getCourses().subscribe(courses=>{
      this.courses = courses
    });
  }

  onTechSelected(tech:string){
    this.technologySelected=tech
    this.applyFilters();
  }

  applyFilters(){
    let filtered = this.courses.filter((course)=>
    course.title.toLocaleLowerCase().startsWith(this.technologySelected.toLocaleLowerCase())
  );

  this.filteredCourses = filtered;
  }

  startTest(courseId:number):void{
    sessionStorage.setItem('userId',this.userId.toString());
    sessionStorage.setItem('courseId',this.courseId.toString());
  }


}
