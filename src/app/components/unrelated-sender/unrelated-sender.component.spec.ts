import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrelatedSenderComponent } from './unrelated-sender.component';

describe('UnrelatedSenderComponent', () => {
  let component: UnrelatedSenderComponent;
  let fixture: ComponentFixture<UnrelatedSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnrelatedSenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnrelatedSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
