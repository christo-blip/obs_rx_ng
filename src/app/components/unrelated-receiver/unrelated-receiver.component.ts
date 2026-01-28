import { Component } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-unrelated-receiver',
  imports: [],
  templateUrl: './unrelated-receiver.component.html',
  styleUrl: './unrelated-receiver.component.scss'
})
export class UnrelatedReceiverComponent {
    constructor(public dataservice: DataserviceService) {}  
    receiveddata:any;

    ngOnInit():void{
      this.updatatedData();
    }

    updatatedData(){
      this.dataservice.shareddata.subscribe((data)=>{
        this.receiveddata = data;
      })
    }

}
