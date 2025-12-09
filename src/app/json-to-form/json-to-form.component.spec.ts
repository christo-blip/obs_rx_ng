import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONTOFORMComponent } from './json-to-form.component';

describe('JSONTOFORMComponent', () => {
  let component: JSONTOFORMComponent;
  let fixture: ComponentFixture<JSONTOFORMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JSONTOFORMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JSONTOFORMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
