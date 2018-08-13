import { Component, EventEmitter, Output, Inject, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'filters-cmp',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() filtersChange = new EventEmitter();

  @Input() set filters(v) {
    v = v || {};
    const { orderId=null, customer=null, vendor=null } = v;
    this.filtersForm.setValue({
      orderId,
      customer,
      vendor
    }, {emitEvent: false});
  }

  filtersForm = new FormGroup({
    orderId: new FormControl(),
    customer: new FormControl(),
    vendor: new FormControl(),
  });

  constructor() {
    this.filtersForm.valueChanges.debounceTime(200).subscribe((value) => {
      const { orderId, customer, vendor } = value;
      const filters = { orderId: orderId || null, customer: customer || null, vendor: vendor || null };
      this.filtersChange.next(filters);
    });
  }

  handleReset() {
    this.filtersForm.reset();
  }
}
