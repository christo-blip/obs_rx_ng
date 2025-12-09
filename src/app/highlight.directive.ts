import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host:{
    '(click)':'applycolor()'
  }
})
export class HighlightDirective {
  @Input()number:number;
  @Input()isClicked:boolean;
  private el:ElementRef | undefined
  constructor(el:ElementRef) {this.el=el; }
  applycolor(){
    this.isClicked = ! this.isClicked
    if(this.number != 0 && this.isClicked){
      this.el.nativeElement.style.color='red';
      this.el.nativeElement.style.fontSize='30px';
    }else
      {
      this.el.nativeElement.style.color='green';
      this.el.nativeElement.style.fontSize='50px';
    }
  }
}
