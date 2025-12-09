import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesudoclassElementComponent } from './pesudoclass-element.component';

describe('PesudoclassElementComponent', () => {
  let component: PesudoclassElementComponent;
  let fixture: ComponentFixture<PesudoclassElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesudoclassElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesudoclassElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
