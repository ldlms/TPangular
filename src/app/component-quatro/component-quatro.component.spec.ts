import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentQuatroComponent } from './component-quatro.component';

describe('ComponentQuatroComponent', () => {
  let component: ComponentQuatroComponent;
  let fixture: ComponentFixture<ComponentQuatroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentQuatroComponent]
    });
    fixture = TestBed.createComponent(ComponentQuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
