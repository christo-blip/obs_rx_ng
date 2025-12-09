import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivebookformsComponent } from './reactivebookforms.component';

describe('ReactivebookformsComponent', () => {
  let component: ReactivebookformsComponent;
  let fixture: ComponentFixture<ReactivebookformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactivebookformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivebookformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
