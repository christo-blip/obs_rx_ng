import { Component, computed, effect, inject, Injector, signal } from '@angular/core';
import { ViewchildchildrenComponent } from "../viewchildchildren/viewchildchildren.component";
import { Note } from '../../models/task_model';

@Component({
  selector: 'app-signalcomponent',
  imports: [ViewchildchildrenComponent],
  templateUrl: './signalcomponent.component.html',
  styleUrl: './signalcomponent.component.scss'
})
export class SignalcomponentComponent {
  public title=signal('My frist line of text');
  public  count=signal(0)
  public name=signal("Christopher")
  public age=signal(30)
  public gender=signal('female')
  public CanVote=computed(()=>{
    if(this.gender() == "Male"){
      return this.age()>18?true:false;
    }else{
      return false;
    }
  })
  public injector = inject(Injector)
  runeffect =     effect(()=>{
      console.log(" My age is "+this.age())
    },{injector:this.injector})
    
  buttonclicked(){
    this.count.update((countval)=>countval+1);
  }

  constructor(){

  }

  ngOnInit(){
    setTimeout(()=>{
          this.name.update(value=> value+" Arulraj")
           this.age.set(16)
          //  this.notes[0].title="test"
          // this.gender.set('Male')
    },3000)
  }


notes:Note[]=[{
  id:1,
  title:'some Title',
  details:'some details to show'
},{
    id:2,
  title:'some Title 2',
  details:'some details to show 2'
}]



}
