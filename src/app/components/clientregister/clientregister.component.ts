import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup, ReactiveFormsModule,FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JobapplicaComponent } from "../jobapplica/jobapplica.component";
import { JsonPipe } from '@angular/common';



@Component({
  selector: 'app-clientregister',
  imports: [FormsModule,ReactiveFormsModule, CommonModule, JobapplicaComponent,JsonPipe],
  templateUrl: './clientregister.component.html',
  styleUrl: './clientregister.component.scss'
})
export class ClientregisterComponent implements OnInit{

  registerform:FormGroup;
  registerdata:any[]=[];
  DynamicFields:FormGroup;
  public displaydynamicfiled:boolean=false;
  filterControl= new FormControl('');
  public orginaldata=[]; 

  ngOnInit(){
  this.CreateForm();
  this.Createdynamic();
  this.createForms();
  this.createmanagement();
  this.filterControl.valueChanges.subscribe((value)=>this.applyfilter(value))
  }
  
  constructor( private fb:FormBuilder){}

  CreateForm(){
    this.registerform=this.fb.group({
      name:'',
      email:'',
      address:'',
      hobbies:this.fb.array([this.createhobby()]),
      occupation:'',
      language:'',
    })
  }

  createhobby():FormGroup{
   return this.fb.group({
      hobby:''
    })
  }

  get hobbies():FormArray{
    return <FormArray>this.registerform.get('hobbies')
  }

  addhobby(){
    this.hobbies.push(this.createhobby())
  }

  registerDataSubmit(){
    this.registerdata.push(this.registerform.value)
    this.registerform.reset();
    this.hobbies.clear();
    
  }

  Createdynamic(){
    this.DynamicFields=this.fb.group({
      count:'',
      fieldarray:this.fb.array([])
    })
  }

 editregisterdata(index){
const selected=this.registerdata[index]
  this.registerform=this.fb.group({
      name:selected.name,
      email:selected.email,
      address:selected.address,
      hobbies:this.fb.array(
        selected.hobbies.map((d)=>
        this.fb.group({
          hobby:[d.hobby]
        })
        )
      ),
      occupation:selected.occupation,
      language:selected.language,
  })
  this.registerdata.splice(index,1)
  }

  deleteregisterdata(index:number){
    this.registerdata.splice(index,1)
  }

  applyfilter(data){

    this.registerdata = this.registerdata.filter((item)=>  item.name.toLowerCase().includes(data))


    
  }

  createfields():FormGroup{
    return this.fb.group({
      label:'',
      name:''
    })
  }

  get fieldarray():FormArray{
    return <FormArray>this.DynamicFields.get('fieldarray')
  }

  
  getthecount(){
    let value=+this.DynamicFields.get('count').value
    for(let i=0;i<value;i++){
      this.fieldarray.push(this.createfields())
    }
    value=0;
     this.displaydynamicfiled=false;
  }


  startdynamicfiels(){
    this.displaydynamicfiled=true;

  }

    Collegeregister: FormGroup;
      public collegetotalstrength=100;
  public studentsincounselling = 0;
  
  createForms() {
    this.Collegeregister = this.fb.group({
      collegename: ['', Validators.required],
      collegelocation: ['', Validators.required],
      departname: ['', Validators.required],
      departvalue:[0,[
        Validators.required,
        Validators.min(1),
        Validators.max(this.collegetotalstrength)
      ]],
      mode:['',Validators.required],
      department:this.fb.array([])
    });
  }

  
  get departments():FormArray{
    return this.Collegeregister.get('departments') as FormArray
  }

  addDepartment(){
    if (this.Collegeregister.get('deptname')?.invalid ||
        this.Collegeregister.get('deptvalue')?.invalid ||
        this.Collegeregister.get('deptmode')?.invalid) {
      return;
    }

    const name = this.Collegeregister.get('deptname')?.value;
    const value = Number(this.Collegeregister.get('deptvalue')?.value);
    const mode = this.Collegeregister.get('deptmode')?.value;

    if (value > this.collegetotalstrength) return;

    // Update remaining strength
    this.collegetotalstrength -= value;

    // Update counselling count
    if (mode === 'counselling') {
      this.studentsincounselling += value;
    }

    // Push row into form array
    this.departments.push(
      this.fb.group({
        name: name,
        value: value,
        mode: mode
      })
    );

    // Reset input fields
    this.Collegeregister.patchValue({
      deptname: '',
      deptvalue: 0,
      deptmode: ''
    });

    // Update max validator dynamically
    this.updateMaxValidator();
  }

  updateMaxValidator() {
    const control = this.Collegeregister.get('deptvalue');
    control?.setValidators([
      Validators.required,
      Validators.min(1),
      Validators.max(this.collegetotalstrength)
    ]);
    control?.updateValueAndValidity();
  }

  canSubmit() {
    return this.collegetotalstrength === 0 && this.Collegeregister.valid;
  }

  //  onSubmit() {
  //   alert(JSON.stringify({
  //     collegename: this.Collegeregister.value.collegename,
  //     collegelocation: this.Collegeregister.value.collegelocation,
  //     departments: this.Collegeregister.value.departments,
  //     remainingstrength: this.collegetotalstrength,
  //     studentsincounselling: this.studentsincounselling
  //   }, null, 2));
  // }

  form: FormGroup;
  // tracked numeric counts (students)
  totalStudents = 100;        // total college strength (user-entered)
  remainingStudents = 100;    // remaining students not yet assigned/deducted
  counsellingStudents = 0;    // students assigned via counselling deductions
  managementStudents = 0;
  departmentss = ["CSE", "ECE", "EEE", "MECH", "CIVIL"];  
  newDept=''    // students assigned via management deductions

  createmanagement(){
        this.form = this.fb.group({
      collegename: '',
      location: '',
      numberOfStudents:'',
     collegeStrength: [100],
      studentsCounselling: [0],
          newDepartment:'',
      department: ['', Validators.required],
      percentage: [0, [Validators.required, Validators.min(1), Validators.max(100)]],
      deductiontype: ['', Validators.required],

      grid: this.fb.array([])
    });
  
  }
  
  get gridArray(): FormArray {
    return this.form.get('grid') as FormArray;
  }

  // reset counts when total changes (clears grid)
 calcManagement() {
    const total = this.form.get('totalstudents')?.value;
    const counselling = this.form.get('counsellingstudents')?.value;
  alert(counselling)
    this.counsellingStudents += counselling;
    this.managementStudents = total - counselling;
  }

  addRow() {
    const dept = this.form.get('department')?.value;
    const pct = Number(this.form.get('percentage')?.value);
    const type = this.form.get('deductiontype')?.value;

     if (pct > this.remainingStudents) {
      alert("Percentage exceeds remaining college strength!");
      return;
    }
        // Deduct from remaining
    this.remainingStudents -= pct;
        if (type === 'Counselling') {
        this.counsellingStudents += pct;
      } 

    this.form.patchValue({
      collegeStrength: this.remainingStudents,
      studentsCounselling: this.counsellingStudents
    });

    this.gridArray.push(
      this.fb.group({
        department: dept,
        percentage: pct,
        type: type
      })
    );

    this.form.patchValue({
      department: '',
      percentage: 0,
      deductiontype: ''
    });
  }

  editRow(index: number) {
  const row = this.gridArray.at(index)?.value;
  const pct = Number(row.percentage);
  const type = row.type;
  // 1️⃣ Restore to remainingStrength
  this.remainingStudents += pct;
  // 2️⃣ Restore counselling or management value
  if (type === 'Counselling') {
    this.counsellingStudents -= pct;
  } else {
    this.managementStudents -= pct;
  }
  // 3️⃣ Remove the row from grid
  this.gridArray.removeAt(index);
  // 4️⃣ Update readonly fields
  this.form.patchValue({
    collegeStrength: this.remainingStudents,
    studentsCounselling: this.counsellingStudents
  });
  // 5️⃣ Send values back into input fields for editing
  this.form.patchValue({
    department: row.department,
    percentage: row.percentage,
    deductiontype: row.type
  });
}


  // Delete row and restore numbers
  deleteRow(i: number) {
      const row = this.gridArray.at(i)?.value;
    const pct = Number(row.percentage);
      const type = row.type;
      this.remainingStudents += pct;

        if (row.type === 'Counselling') {
      this.counsellingStudents -= pct;
    } else {
      this.managementStudents -= pct;
    }
    // update readonly fields
    this.form.patchValue({
      collegeStrength: this.remainingStudents,
      studentsCounselling: this.counsellingStudents
    });
    this.gridArray.removeAt(i);
  }

addNewDepartment(){
  const dept= this.form.get('newDepartment')?.value.trim();
  
    if (!dept) {
    alert("Please enter a department name");
    return;
  }

  if (this.departmentss.includes(dept)) {
    alert("Department already exists!");
    return;
  }

  this.departmentss.push(dept);

  // Clear input
  this.form.patchValue({ newDepartment: '' });

  alert("Department added!")
}

   canSave() {
    return this.remainingStudents === 0 &&
           this.form.get('collegename')?.valid &&
           this.form.get('location')?.valid && 
           this.form.get('numberOfStudents')?.valid;
           ;
  }

  onSubmit() {
    alert("Form Saved Successfully!\n" + 
      JSON.stringify(this.form.value, null, 2));
  }

}
