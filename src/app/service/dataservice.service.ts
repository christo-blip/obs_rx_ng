import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  public datasubject = new BehaviorSubject<any>(null);
  public shareddata: Observable<any> = this.datasubject.asObservable();
  constructor() { }

  update(receive:string){
    this.datasubject.next(receive);
  }

}
