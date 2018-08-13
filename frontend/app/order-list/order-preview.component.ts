import { Component, Input, OnInit } from '@angular/core';

import { Order, Status } from '../models';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.scss']
})
export class OrderPreviewComponent implements OnInit {
  @Input() order: Order;

  status: Status;

  ngOnInit() {
    this.status = !!this.order.deliveredAt ? Status.Delivered : Status.Progress;
  }
}
