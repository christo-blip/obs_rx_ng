import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeinputComponent } from './subscribeinput.component';

describe('SubscribeinputComponent', () => {
  let component: SubscribeinputComponent;
  let fixture: ComponentFixture<SubscribeinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
