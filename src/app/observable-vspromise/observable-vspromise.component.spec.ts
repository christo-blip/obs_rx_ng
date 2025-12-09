import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableVSPromiseComponent } from './observable-vspromise.component';

describe('ObservableVSPromiseComponent', () => {
  let component: ObservableVSPromiseComponent;
  let fixture: ComponentFixture<ObservableVSPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableVSPromiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableVSPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
