import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  DebugElement,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

import { StatusComponent } from './status.component';

describe('ChipsComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatusComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    component.status = 'delivered';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list of chips', () => {
    component.status = 'progress';

    const s = fixture.debugElement.nativeElement;
    const ts = s.querySelectorAll('span');

    expect(ts.length).toEqual(1);
  });
});
