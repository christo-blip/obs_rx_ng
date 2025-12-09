import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subscription } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-fetchusing-httpobservable',
  standalone:true,
  imports: [JsonPipe],
  templateUrl: './fetchusing-httpobservable.component.html',
  styleUrl: './fetchusing-httpobservable.component.scss'
})
export class FetchusingHttpobservableComponent implements OnInit,OnDestroy {
  httpClinet=inject(HttpClient)
  data:any;
  fetchdatadestory?:Subscription;

  constructor(){}
  ngOnInit(): void { 
  this.fetchdatadestory =  this.fetchdata().subscribe({
      next:(response:any)=>{
        console.log(response)
        this.data=response;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=>{}
    })
  }

  fetchdata(){
    return this.httpClinet.get('https://jsonplaceholder.typicode.com/posts');
  }
 
  ngOnDestroy(){
    this.fetchdatadestory?.unsubscribe();
  }


}
