import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribemethodComponent } from './subscribemethod.component';

describe('SubscribemethodComponent', () => {
  let component: SubscribemethodComponent;
  let fixture: ComponentFixture<SubscribemethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribemethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribemethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
