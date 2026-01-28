import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrelatedReceiverComponent } from './unrelated-receiver.component';

describe('UnrelatedReceiverComponent', () => {
  let component: UnrelatedReceiverComponent;
  let fixture: ComponentFixture<UnrelatedReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnrelatedReceiverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnrelatedReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
