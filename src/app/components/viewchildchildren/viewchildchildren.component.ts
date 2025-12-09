import { Component, ElementRef, OnInit, ViewChild, ViewChildren,QueryList, viewChild, input, computed, effect, model } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { CoursesService } from '../../service/courses.service';
import { Note } from '../../models/task_model';

@Component({
  selector: 'app-viewchildchildren',
  imports: [CounterComponent],
  templateUrl: './viewchildchildren.component.html',
  styleUrl: './viewchildchildren.component.scss',
})

export class ViewchildchildrenComponent implements OnInit{
  @ViewChild('highlight')markerelement:ElementRef;
  @ViewChildren('highlightlist')elementlist:QueryList<any>;
  @ViewChild('countercomp')chidcomp:CounterComponent;
  constructor(public courseserv:CoursesService){

  }

  ngOnInit(){

  }

  changecolor(){
    this.markerelement.nativeElement.style.color='green';
    this.elementlist.forEach((element:any)=>
    element.nativeElement.style.color='yellow')
    const value="the color has change to green"
    this.courseserv.changecolor(value);
  }

  inccounter(){
    this.chidcomp.counterincer();
  }

  deccounter(){
    this.chidcomp.counterdec();
  }

  note=model.required<Note>()
  indexes=input(-1,{transform:this.addindex})
  sNo=computed(()=> this.indexes()+ 1)
  addindex(value:number):number{
    return value+1
  }
}
