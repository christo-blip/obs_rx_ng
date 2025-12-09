import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseserviceComponent } from './courseservice.component';

describe('CourseserviceComponent', () => {
  let component: CourseserviceComponent;
  let fixture: ComponentFixture<CourseserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
