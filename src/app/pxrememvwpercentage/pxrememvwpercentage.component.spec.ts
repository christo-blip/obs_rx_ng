import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxrememvwpercentageComponent } from './pxrememvwpercentage.component';

describe('PxrememvwpercentageComponent', () => {
  let component: PxrememvwpercentageComponent;
  let fixture: ComponentFixture<PxrememvwpercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PxrememvwpercentageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PxrememvwpercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
