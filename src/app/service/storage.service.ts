import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    private STORAGE_KEY = 'componentData';

  private dataSubject = new BehaviorSubject<any>(this.loadFromStorage());
  data$ = this.dataSubject.asObservable();

  private loadFromStorage() {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
  }

   save(componentName: string, data: any) {
    const stored = this.loadFromStorage();

    if (!stored[componentName]) {
      stored[componentName] = [];
    }

    stored[componentName].push(data);

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stored));

    // 🔥 notify all components
    this.dataSubject.next(stored);
  }

   getByComponent(componentName: string) {
    return this.data$.pipe(
      map((data: any) => data[componentName] || [])
    );
  }

}
