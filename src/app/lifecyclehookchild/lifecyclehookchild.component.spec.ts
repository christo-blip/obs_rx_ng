import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclehookchildComponent } from './lifecyclehookchild.component';

describe('LifecyclehookchildComponent', () => {
  let component: LifecyclehookchildComponent;
  let fixture: ComponentFixture<LifecyclehookchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecyclehookchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyclehookchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
