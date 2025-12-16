import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LifecyclehookchildComponent } from "../lifecyclehookchild/lifecyclehookchild.component";

@Component({
  selector: 'app-lifecyclehook',
  imports: [LifecyclehookchildComponent],
  templateUrl: './lifecyclehook.component.html',
  styleUrl: './lifecyclehook.component.scss'
})
export class LifecyclehookComponent implements OnInit, OnChanges, 
DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy
{
 public counter;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChange hi")
  }

  ngOnInit(){
  console.log("Test")
  }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
  }
  
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
  }
  
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
 
  

}
