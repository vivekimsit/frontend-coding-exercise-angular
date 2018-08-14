import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Filters, Order } from '../models';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-filter-and-orders',
  templateUrl: './filter-and-orders.component.html',
  styleUrls: ['./filter-and-orders.scss']
})
export class FilterAndOrders {
  currentPage = 1;

  constructor (
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe((p:any) => {
      const {orderId=null, customer=null, vendor=null, page=1} = p;
      const filters = { orderId, customer, vendor, page };
      this.currentPage = page;
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
    return this.ordersService.orders.items;
  }

  get pages(): number[] {
    const { total } = this.ordersService.total;
    return this.ordersService.orders;
  }

  handleFiltersChange(filters: Filters) {
    this.ordersService.changeFilters(filters);
    this.router.navigate(['/orders'], { queryParams: this.createParams(filters) });
  }

  handlePageChange(page: number) {
    this.currentPage = page;
    const params = this.route.snapshot.queryParams;
    this.router.navigate(['/orders'], { queryParams: this.createParams({
      orderId: params.orderId,
      customer: params.customer,
      vendor: params.vendor,
      page,
    })});
  }

  private createParams(filters: Filters): Params {
    const r:any = {};
    const {orderId, customer, vendor, page} = filters;
    if (page) r.page = page;
    if (orderId) r.orderId = orderId;
    if (customer) r.customer = customer;
    if (vendor) r.vendor = vendor;
    return r;
  }
}
