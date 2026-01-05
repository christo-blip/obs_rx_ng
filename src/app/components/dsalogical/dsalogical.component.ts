import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-dsalogical',
  imports: [],
  templateUrl: './dsalogical.component.html',
  styleUrl: './dsalogical.component.scss'
})
export class DSALogicalComponent {
  dataList: any[] = [];
  componentName = 'profile';

  constructor(private storage: StorageService){}

  ngOnInit() {
    this.dataList = this.storage.get(this.componentName);
  }

}
