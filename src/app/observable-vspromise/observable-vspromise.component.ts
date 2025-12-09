import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-vspromise',
  imports: [],
  templateUrl: './observable-vspromise.component.html',
  styleUrl: './observable-vspromise.component.scss'
})
export class ObservableVSPromiseComponent {
  constructor(){}
  ngOnInit(){

  }

  myObservable: any;
  myPromise:any;
  mysubscribe:any;

  create(){
   this.myObservable = new Observable<string>(observer =>{
      // console.log("Observable has created");
       observer.next("Observable has emitted 1")
      // observer.next("Observable has emitted 2")
      // observer.next("Observable has emitted 3")
      // observer.next("Observable has emitted 4")
      setInterval(()=>{
        observer.next("Observable is emitted data");
      },1000)
    });

    this.myPromise = new Promise<string>(resolve => {
      // console.log("Promise has created");
       resolve("Promise has emitted 1");
      // resolve("Promise has emitted 2");
      // resolve("Promise has emitted 3");
      // resolve("Promise has emitted 4");
      setInterval(()=>{
        resolve("Promise has emitted 1");
      },1000)
    });
  }

  execute(){
   this.mysubscribe=this.myObservable.subscribe((data:any) =>{
      console.log(data);
    })
    this.myPromise.then((data:any)=>{
      console.log(data)
    })
  }

  cancel(){
this.mysubscribe.unsubscribe();
  }

}
