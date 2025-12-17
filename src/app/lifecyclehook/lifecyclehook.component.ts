import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LifecyclehookchildComponent } from "../lifecyclehookchild/lifecyclehookchild.component";

@Component({
  selector: 'app-lifecyclehook',
  imports: [LifecyclehookchildComponent],
  templateUrl: './lifecyclehook.component.html',
  styleUrl: './lifecyclehook.component.scss'
})
export class LifecyclehookComponent implements OnInit

{
 public counter;
User={
  name:"Raj",
  age:27
}
 



  ngOnInit(){
  setTimeout(()=>{
    this.User.name='Frankenstine'
  },2000)
  }

 
  

}
