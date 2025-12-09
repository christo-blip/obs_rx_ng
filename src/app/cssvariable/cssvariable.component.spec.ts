import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssvariableComponent } from './cssvariable.component';

describe('CssvariableComponent', () => {
  let component: CssvariableComponent;
  let fixture: ComponentFixture<CssvariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssvariableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssvariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
