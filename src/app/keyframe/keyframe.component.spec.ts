import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyframeComponent } from './keyframe.component';

describe('KeyframeComponent', () => {
  let component: KeyframeComponent;
  let fixture: ComponentFixture<KeyframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
