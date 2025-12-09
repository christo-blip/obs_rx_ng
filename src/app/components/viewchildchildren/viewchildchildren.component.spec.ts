import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildchildrenComponent } from './viewchildchildren.component';

describe('ViewchildchildrenComponent', () => {
  let component: ViewchildchildrenComponent;
  let fixture: ComponentFixture<ViewchildchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewchildchildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewchildchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
