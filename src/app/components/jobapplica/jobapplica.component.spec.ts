import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobapplicaComponent } from './jobapplica.component';

describe('JobapplicaComponent', () => {
  let component: JobapplicaComponent;
  let fixture: ComponentFixture<JobapplicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobapplicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobapplicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
