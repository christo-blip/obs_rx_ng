import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchusingHttpobservableComponent } from './fetchusing-httpobservable.component';

describe('FetchusingHttpobservableComponent', () => {
  let component: FetchusingHttpobservableComponent;
  let fixture: ComponentFixture<FetchusingHttpobservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchusingHttpobservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchusingHttpobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
