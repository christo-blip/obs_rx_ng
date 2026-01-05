import { Component } from '@angular/core';
import { StorageService } from '../../service/storage.service'
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  imports: [ CommonModule ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

     componentName = 'gallery';
  data$!: Observable<any[]>;

  constructor(private storage: StorageService) {
    this.data$ = this.storage.getByComponent(this.componentName);
  }

}
