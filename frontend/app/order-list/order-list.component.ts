import { Component, Input, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";

import { Order } from '../models';
import { OrderListService } from './order-list.service';
import { Filters } from "../models";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  @Input() orders: Order[];
  @Input() limit: number;

  loading: boolean = false;
  currentPage: number = 1;
  totalPages: Array<number> = [1];

  constructor () {}

  setPageTo(pageNumber: number) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.orders = [];
    this.totalPages = [1, 2];
  }
}
