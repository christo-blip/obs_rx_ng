import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormBuilder, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-jobapplica',
  imports: [ReactiveFormsModule,CommonModule ],
  templateUrl: './jobapplica.component.html',
  styleUrl: './jobapplica.component.scss'
})
export class JobapplicaComponent implements OnInit{
  detailsarray:any[]=[];
  constructor(private fb:FormBuilder){

  }
  ngOnInit(){
this.appjob()
  }

jobapplic:FormGroup;
appjob(){
  this.jobapplic=this.fb.group({
    name:'',
    email:'',
    password:'',
    addressarray:this.fb.array([
      this.createaddress()
    ])
  })
}

createaddress():FormGroup{
 return this.fb.group({
    street:'',
    city:'',
    zip:'',
  })
}

get addressarray(){
return <FormArray>this.jobapplic.get('addressarray')
}

createnewaddress(){
  this.addressarray.push(this.createaddress())
}

submitapplication(){
this.detailsarray.push(this.jobapplic.value)
this.jobapplic.reset();
this.addressarray.clear();
this.addressarray.push(this.createaddress())
}

editdeatils(id:number){
let seletedarray=this.detailsarray[id];
this.jobapplic=this.fb.group({
  name:[seletedarray.name],
  email:[seletedarray.email],
  password:[seletedarray.password],
  addressarray:this.fb.array(
    seletedarray.addressarray.map((d:any)=>
      this.fb.group({
        
        street:[d.street],
        city:[d.city],
        zip:[d.zip]
      })
  )
  
  )

})
this.detailsarray.splice(id,1);
}

deletedetails(id){
this.detailsarray.splice(id,1);
}

}
