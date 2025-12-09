import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,FormBuilder, Validators, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { ClientregisterComponent } from '../clientregister/clientregister.component';


@Component({
  selector: 'app-addbook',
  imports: [ReactiveFormsModule,CommonModule,JsonPipe,ClientregisterComponent],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.scss'
})
export class AddbookComponent implements OnInit {
  bookdetail:FormGroup;
  title_error:string;
  author_error:string;
  dynamicform:FormGroup;
  show_table:boolean=false;
  constructor(private fb:FormBuilder){
    
  }
  ngOnInit(){
    this.books()
    this.createdynamic()
const authorcontrol=this.bookdetail.get('author');
authorcontrol.valueChanges.subscribe((x)=>
this.authorvalidator(authorcontrol as FormControl)
)
  }

  authorvalidator(authorcontrol:FormControl){
    if(authorcontrol.errors && authorcontrol.touched){
      if(authorcontrol.errors?.['required']){
        this.author_error='The field is required'
      }
      else if(authorcontrol.errors?.['minlength']){
        this.author_error='The minlength should be greater than'+authorcontrol.errors?.['minlength']?.requiredLength
      }
    }
  }


  validator(titlecontroller:FormControl){
    if(titlecontroller.errors && (titlecontroller.touched || titlecontroller.dirty)){
      if(titlecontroller.errors?.['required']){
        this.title_error='The field is required'
      }
    }
  }

  prices:any[]=[
    {price:100,pricevalue:'100'},
    {price:200,pricevalue:'200'},
    {price:300,pricevalue:'300'}
  ]

  currencies:any[]=[
    {value: 'USD',viewValue:'US Dolar'},
    {value: 'INR',viewValue:'Indian Rupee'},
    {value: 'EURO',viewValue:'Euro Rupee'},
  ];

  books(){
    this.bookdetail=this.fb.group({
      // title:['',Validators.required],
      titlename:this.fb.array([this.addtitle()]),
      author:['',[Validators.required,Validators.minLength(10)]],
      pages:'',
      published:'',
      price:this.fb.group({
        totalprice:'',
        currency:''
      }),
      formatetype:'',
      pdfform:'',
      domform:''
    })
  }

    addtitle():FormGroup{
    return this.fb.group({
      title:''
    })
  }

  removetitlefunction(i:number){
    this.titlename.removeAt(i)
  }

  get titlename(){
    return <FormArray>this.bookdetail.get('titlename')
  }

  addtitlefunction(){
    this.titlename.push(this.addtitle())
  }



  submitbook(){
    console.log(this.bookdetail.value)
    
  }

  updateset(){
    this.bookdetail.setValue({
      title:'The Morning',
      author:'Ravi Mohan',
      pages:'111',
      published:'11-09-2025',
      price:{
        totalprice:100,
        currency:'INR',
      }
    })
  }

  updatepatch(){
     this.bookdetail.patchValue({
      title:'The Morning song'
     })
  }

  createdynamic(){
   this.dynamicform= this.fb.group({
      valuecount:'',
      mainfields:this.fb.array([])
    })
  }

  createmainfields():FormGroup{
    return this.fb.group({
      name:'',
      label:'',
    })
  }

  get mainfields(){
    return <FormArray>this.dynamicform.get('mainfields')
  }

 addfiled(){
  const value=+this.dynamicform.get('valuecount')?.value;

  for(let i=0;i <value;i++){
    this.mainfields.push(this.createmainfields())
  }
 }

 savemainfields(){
  this.show_table=false;
  this.show_table=this.mainfields.controls.some((control)=> {
    const name=control.get('name').value;
    const lable=control.get('label').value;
    return !!name || !!lable
  })
 }


}
