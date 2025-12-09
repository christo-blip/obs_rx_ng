import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalcomponentComponent } from './signalcomponent.component';

describe('SignalcomponentComponent', () => {
  let component: SignalcomponentComponent;
  let fixture: ComponentFixture<SignalcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
