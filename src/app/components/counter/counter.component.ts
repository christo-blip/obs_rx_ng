import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  public countervalue:number=0;
  counterincer(){
    this.countervalue++;
  }

  counterdec(){
    this.countervalue--;
  }

}
