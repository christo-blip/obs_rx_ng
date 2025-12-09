import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../highlight.directive';


@Component({
  selector: 'app-customdir',
  imports: [CommonModule,HighlightDirective],
  templateUrl: './customdir.component.html',
  styleUrl: './customdir.component.scss'
})
export class CustomdirComponent {

  

  public number=24;
  public isClicked=false;
  constructor(){}

  ngOnInit(){

  }

  applycolor(){
    this.isClicked = !this.isClicked
  }
}
