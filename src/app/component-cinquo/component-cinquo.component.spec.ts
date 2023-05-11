import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCinquoComponent } from './component-cinquo.component';

describe('ComponentCinquoComponent', () => {
  let component: ComponentCinquoComponent;
  let fixture: ComponentFixture<ComponentCinquoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentCinquoComponent]
    });
    fixture = TestBed.createComponent(ComponentCinquoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
