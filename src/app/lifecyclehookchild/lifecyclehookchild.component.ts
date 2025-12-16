import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehookchild',
  imports: [],
  templateUrl: './lifecyclehookchild.component.html',
  styleUrl: './lifecyclehookchild.component.scss'
})
export class LifecyclehookchildComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {

  @Input('name')name='';

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChange")
  }

  ngOnInit(){
  console.log("Test1")
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
