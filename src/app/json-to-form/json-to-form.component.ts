import { Component } from '@angular/core';

@Component({
  selector: 'app-json-to-form',
  imports: [],
  templateUrl: './json-to-form.component.html',
  styleUrl: './json-to-form.component.scss'
})
export class JSONTOFORMComponent {
  constructor(){
    // Arrays
let person={
    name:"raj",
    age:"22"
}
let value=['apple','banana',person]
// console.log(value[2])

//Arrays-Add and Remove Elements on last
value.push("orange");
value.pop();
// console.log(value)

//Arrays-Add and Remove Elements on first
value.unshift("grapes")
value.shift()
// console.log(value)

//loops
for(let i=0;i<value.length;i++){
    // console.log(value[i])
}

//map
const arr=[1,3,2,4,5]
const numbers=arr.map((item,index,array)=>{
    return item+1
})
// console.log(numbers)
//filter
const number1=arr.filter((item,index,array)=>{
    return item<3
})
// console.log(number1) 
//reduce
const number2=arr.reduce((prev,item)=>{
    return prev+item
},0)
// console.log(number2) 
//some
const number3=arr.some((item,index,array)=>{
    return item<3
})
// console.log(number3)  
//every
const number4=arr.every((item,index,array)=>{
    return item<3
})
// console.log(number4) 
//find
const number5=arr.find((item,index,array)=>{
    return item<3
})
console.log(number5)
  }

}
