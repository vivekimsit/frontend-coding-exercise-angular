import { Component, Input } from '@angular/core';

import { Order } from '../models';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html'
})
export class OrderPreviewComponent {
  @Input() order: Order;
}
