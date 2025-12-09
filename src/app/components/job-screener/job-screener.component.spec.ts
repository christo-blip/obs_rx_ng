import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobScreenerComponent } from './job-screener.component';

describe('JobScreenerComponent', () => {
  let component: JobScreenerComponent;
  let fixture: ComponentFixture<JobScreenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobScreenerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobScreenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
