import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Order } from '../models';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  order: Order;

  constructor (
    private route: ActivatedRoute,
    private ordersService: OrderListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data: { order: Order }) => this.order = data.order);
  }
}
