import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTrioComponent } from './component-trio.component';

describe('ComponentTrioComponent', () => {
  let component: ComponentTrioComponent;
  let fixture: ComponentFixture<ComponentTrioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentTrioComponent]
    });
    fixture = TestBed.createComponent(ComponentTrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
