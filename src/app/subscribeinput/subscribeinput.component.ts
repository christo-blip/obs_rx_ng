import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-subscribeinput',
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './subscribeinput.component.html',
  styleUrl: './subscribeinput.component.scss'
})
export class SubscribeinputComponent {

  userArray:any[]=[];

  userForm: FormGroup=new FormGroup({
    id:new FormControl('0',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    username:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
  })

  constructor(private http:HttpClient){
    this.getdata()
  }

  getdata(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userArray=res
    })
  }

  submitdata(){
    const obj=this.userForm.value
    this.http.post('https://jsonplaceholder.typicode.com/users',obj).subscribe((res:any)=>{
      alert("user data")
    })
  }

  onedit(id:any){
    this.http.get('https://jsonplaceholder.typicode.com/users/'+id).subscribe((res:any)=>{

      this.userForm= new FormGroup({
        id:new FormControl(res.id),
        name:new FormControl(res.name),
        username:new FormControl(res.username),
        email:new FormControl(res.email),
        phone:new FormControl(res.phone),
      })
    })
  }

}
