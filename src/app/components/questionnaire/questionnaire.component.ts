import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAnswers } from '../../store/banking/selector';
import { answerQuestion } from '../../store/banking/actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questionnaire',
  imports: [CommonModule, FormsModule],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.scss'
})
export class QuestionnaireComponent {
answers$:Observable<{[key: number]:string}>;

constructor( public store:Store){
  this.answers$= this.store.select(selectAnswers);
}

questions=[
  {
    id:1,
    text:'Whats your monthly income',
    options:['Below $1000','$1000-$5000','Above $5000'],
  },{
        id:2,
    text:'How often will you withdraw money',
    options:['Rarely',' Sometimes', 'Frequently'],
  },{
        id:3,
    text:'Are you planning to run a business with this account',
    options:['Yes','No'],
  }
]

onSelect(questionId: number, answer: string){
   this.store.dispatch(answerQuestion({ questionNumber: questionId, answer}))
}

getRecommendation(answers: {[key:number]:string}):string{
 if(answers[3] === 'Yes') return 'Business Account';
 if(answers[1] === '') return 'Savings Account';
 if(answers[1] === '' && answers[2] === 'Frequently')
  return 'Checking Account';
 return 'Savings Account' 
}

hasAsweredAll(answers:{[key:number]:string}):boolean{
  return Object.keys(answers).length === 3;
}

currentQuestionIndex =0;
get currentQuestion(){
  return this.questions[this.currentQuestionIndex]
}

goNext(){
  if(this.currentQuestionIndex < this.questions.length -1){
    this.currentQuestionIndex ++;
  }
}

goBack(){
  if(this.currentQuestionIndex > 0){
    this.currentQuestionIndex--;
  }
}




}
