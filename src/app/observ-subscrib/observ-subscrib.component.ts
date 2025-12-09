import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-observ-subscrib',
  standalone:true,
  imports: [],
  templateUrl: './observ-subscrib.component.html',
  styleUrl: './observ-subscrib.component.scss'
})
export class ObservSubscribComponent implements OnInit,OnDestroy {
  subscription?:Subscription;
  httpClient=inject(HttpClient)
  constructor(){
    const test$ = new Observable(Subscriber=>{
      Subscriber.next("1");
      Subscriber.next("2");
      Subscriber.complete();
    })
    test$.subscribe(
       x =>{console.log(x)},
      error => {console.log("")},
      () => {console.log("compoleted")}
    )
  }

  // featchData(){
  //   return this.httpClient.get('https://jsonplaceholder/typicode.com/posts').pipe(
  //     map((response:any)=>response.data));
  // }

  ngOnInit(): void {
    const observable = new Observable(Subscriber=>{
      Subscriber.next("Helo iam here");
      Subscriber.complete();
    })
    this.subscription = observable.subscribe({
      next: (x)=>{console.log(x)},
      error:(error)=>{},
      complete:()=>{console.log("done")}
  })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
