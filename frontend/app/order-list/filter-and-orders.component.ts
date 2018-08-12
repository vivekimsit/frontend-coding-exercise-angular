import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Order } from '../models';
import { OrderListService } from './order-list.service';
import { Filters } from "../models";

@Component({
  selector: 'app-filter-and-orders',
  templateUrl: './filter-and-orders.component.html',
  styleUrls: ['./filter-and-orders.scss']
})
export class FilterAndOrders {
  constructor (
    private ordersService: OrderListService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((p:any) => {
      const {status, customer, vendor} = p;
      const filters = {status: status || null, customer: customer || null, vendor: vendor || null};
      this.ordersService.changeFilters(filters);
    });
  }

  get filters(): Filters {
    return this.ordersService.filters;
  }

  get loading(): boolean {
    return this.ordersService.loading;
  }

  get orders(): Order[] {
    return this.ordersService.orders;
  }

  handleFiltersChange(filters: Filters) {
    this.ordersService.changeFilters(filters);
    this.router.navigate(['/orders'], { queryParams: this.createParams(filters) });
  }

  private createParams(filters: Filters): Params {
    const r:any = {};
    const {status, customer, vendor} = filters;
    if (status) r.status = status;
    if (customer) r.customer = customer;
    if (vendor) r.vendor = vendor;
    return r;
  }
}
