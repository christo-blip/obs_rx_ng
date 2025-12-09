import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdirComponent } from './customdir.component';

describe('CustomdirComponent', () => {
  let component: CustomdirComponent;
  let fixture: ComponentFixture<CustomdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomdirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
