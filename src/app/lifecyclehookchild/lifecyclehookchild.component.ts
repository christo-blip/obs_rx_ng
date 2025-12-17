import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-lifecyclehookchild',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './lifecyclehookchild.component.html',
  styleUrl: './lifecyclehookchild.component.scss'
})
export class LifecyclehookchildComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {

  //  @Input('name')name='';
  public person='bala'

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChange")
  }

  ngOnInit(){
  // setTimeout(()=>{
  //   this.person='karthik'
  // },2000)
  }
  ngDoCheck(): void {
    console.log("Do check has called")
  }
  
  ngAfterContentInit(): void {
    console.log("ContentInit")
  }
  
  ngAfterContentChecked(): void {
    console.log("ContentChecked")
  }
  
  ngAfterViewInit(): void {
    console.log("After ViewInit has changed")
  }
  
  ngAfterViewChecked(): void {
    console.log("After ViewChecked has changed")
  }

  ngOnDestroy(): void {
  }


}
