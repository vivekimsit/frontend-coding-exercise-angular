import { Component, EventEmitter, Output, Inject, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'filters-cmp',
  templateUrl: './filters.html',
  styleUrls: ['./filters.scss']
})
export class FiltersCmp {
  @Output() filtersChange = new EventEmitter();

  @Input() set filters(v) {
    v = v || {};
    const { status=null, customer=null, vendor=null } = v;
    this.filtersForm.setValue({
      status,
      customer,
      vendor
    }, {emitEvent: false});
  }

  filtersForm = new FormGroup({
    status: new FormControl(),
    customer: new FormControl(),
    vendor: new FormControl(),
  });

  constructor() {
    this.filtersForm.valueChanges.debounceTime(200).subscribe((value) => {
      const { status, customer, vendor } = value;
      const filters = { status: status || null, customer: customer || null, vendor: vendor || null };
      this.filtersChange.next(filters);
    });
  }
}
