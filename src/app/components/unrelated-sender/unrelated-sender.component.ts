import {Component, OnInit} from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { UnrelatedReceiverComponent} from '../unrelated-receiver/unrelated-receiver.component';
import {ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-unrelated-sender',
  imports: [UnrelatedReceiverComponent, ReactiveFormsModule],
  templateUrl: './unrelated-sender.component.html',
  styleUrl: './unrelated-sender.component.scss'
})
export class UnrelatedSenderComponent implements  OnInit {

  shareddataForm:FormGroup;

  ngOnInit(): void {
     this.shareddataForm= new FormGroup({
       sharefield:new FormControl('')
     })
  }
  constructor(public dataservice: DataserviceService) {}

  senddata(value:string){
    this.shareddataForm.get('sharefield')?.setValue('');
    this.dataservice.update(value)
  }

}
