import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDuoComponent } from './component-duo.component';

describe('ComponentDuoComponent', () => {
  let component: ComponentDuoComponent;
  let fixture: ComponentFixture<ComponentDuoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentDuoComponent]
    });
    fixture = TestBed.createComponent(ComponentDuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
