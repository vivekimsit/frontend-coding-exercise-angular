import { Component, Input, OnInit } from '@angular/core';

import { Order } from '../models';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @Input() limit: number;

  orders: Order[];
  loading: boolean = false;
  currentPage: number = 1;
  totalPages: Array<number> = [1];

  constructor (
    private ordersService: OrderListService
  ) {}

  ngOnInit() {
    this.runQuery();
  }

  setPageTo(pageNumber: number) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.orders = [];

    this.ordersService.query()
      .subscribe(data => {
        this.loading = false;
        this.orders = data.items;
        this.totalPages = [1, 2];
      });
  }
}
