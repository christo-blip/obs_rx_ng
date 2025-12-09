import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZindexComponent } from './zindex.component';

describe('ZindexComponent', () => {
  let component: ZindexComponent;
  let fixture: ComponentFixture<ZindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZindexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
