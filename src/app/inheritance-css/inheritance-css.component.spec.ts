import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceCSSComponent } from './inheritance-css.component';

describe('InheritanceCSSComponent', () => {
  let component: InheritanceCSSComponent;
  let fixture: ComponentFixture<InheritanceCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InheritanceCSSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
