import {
  async,
  fakeAsync,
  tick,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [FiltersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when filters change', () => {
    it('should fire a change event', fakeAsync(() => {
      const component = new FiltersComponent();
      const events = [];
      component.filtersForm.valueChanges.subscribe(v => events.push(v));

      component.filtersForm.controls['customer'].setValue('F');

      setTimeout(() => { component.filtersForm.controls['customer'].setValue('Fo'); },  100);
      setTimeout(() => { component.filtersForm.controls['customer'].setValue('Foo'); }, 150);

      expect(events).toEqual([{ orderId: null, customer: 'F', vendor: null }]);

      tick(1150);
      expect(events).toEqual([
        { orderId: null, customer: 'F', vendor: null },
        { orderId: null, customer: 'Fo', vendor: null }, 
        { orderId: null, customer: 'Foo', vendor: null } 
      ]);
    }));
  });
});
