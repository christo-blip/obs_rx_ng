import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservSubscribComponent } from './observ-subscrib.component';

describe('ObservSubscribComponent', () => {
  let component: ObservSubscribComponent;
  let fixture: ComponentFixture<ObservSubscribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservSubscribComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservSubscribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
