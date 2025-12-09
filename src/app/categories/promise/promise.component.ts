import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  imports: [],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss'
})
export class PromiseComponent {

  ngOnInit(){
    this.basicpormise()
  }

  basicpormise(){
    const promise = new Promise((resolve,recject)=>{
      let data="fetched data"
      setTimeout(()=>{
        resolve(data);
        recject("The data has been stoped")
      },2000)
      
    }) 

    promise.then(function(value){
      console.log(value)
    })
  }


}
