import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reactivebookforms',
  imports: [NgFor,ReactiveFormsModule,JsonPipe],
  templateUrl: './reactivebookforms.component.html',
  styleUrl: './reactivebookforms.component.scss'
})
export class ReactivebookformsComponent implements OnInit{
  constructor(){
    
  }
  ngOnInit():void{
    this.initForm();
  }
  prices:any[]=[
    {
      value: 100,viewValue:'100'
    },
    {
      value: 200,viewValue:'200'
    },
    {
      value: 300, viewValue: '300'
    }
  ];

  currencies:any[]=[
    {
      value: 'USD',viewValue:'US Dolar'
    },
    {
      value: 'INR',viewValue:'Indian Rupee'
    },
  ];

  public addBookForm:FormGroup;
  public initForm():void{
    this.addBookForm = new FormGroup({
    title:new FormControl('',Validators.required), 
    author:new FormControl('',Validators.required),
    pages:new FormControl('',Validators.required),
    price:new FormGroup({
      currency:new FormControl('',Validators.required),
      value:new FormControl('',Validators.required),
    }),
    publishedOn:new FormControl(''),
    isPublished:new FormControl(''),
  })
  }

  saveBook(){
    console.log(this.addBookForm.value);
  }


}
