import { Component, input, Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-filter',
  imports: [CommonModule],
  templateUrl: './tech-filter.component.html',
  styleUrl: './tech-filter.component.scss'
})
export class TechFilterComponent {
@Input() techList:{name:string,image:string}[]=[];
@Output() filterCourses = new EventEmitter<string>();

selectTechnology(tech:string){
  this.filterCourses.emit(tech);
}
// techList=[
//   {
//         name:'Angular',
//     image:'../../../assets/technologies/angular.svg',
//   },
//   {
//     name:'React',
//     image:'../../../assets/technologies/react.svg',
//   },
//   {
//         name:'Azure',
//     image:'../../../assets/technologies/azure.svg',
//   },
//   {    name:'.Net Core',
//     image:'../../../assets/technologies/dotnet-core.svg',},
//   {    name:'Javascript',
//     image:'../../../assets/technologies/javascript.svg',},
//   {    name:'Java',
//     image:'../../../assets/technologies/java.svg',},
//   {    name:'SQL',
//     image:'../../../assets/technologies/sql.svg',},
//   {    name:'React Native',
//     image:'../../../assets/technologies/react-native.svg',},
//   {    name:'AWS',
//     image:'../../../assets/technologies/aws.svg',},
//   {    name:'Docker',
//     image:'../../../assets/technologies/docker.svg',},
// ]'
}
