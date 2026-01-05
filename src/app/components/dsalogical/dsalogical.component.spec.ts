import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSALogicalComponent } from './dsalogical.component';

describe('DSALogicalComponent', () => {
  let component: DSALogicalComponent;
  let fixture: ComponentFixture<DSALogicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DSALogicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DSALogicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
