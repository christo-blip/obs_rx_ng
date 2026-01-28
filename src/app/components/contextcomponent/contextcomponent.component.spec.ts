import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextcomponentComponent } from './contextcomponent.component';

describe('ContextcomponentComponent', () => {
  let component: ContextcomponentComponent;
  let fixture: ComponentFixture<ContextcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
