import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Order, OrdersDetail } from '../models';
import { map } from 'rxjs/operators/map';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';

import { Filters } from "../models";

@Injectable()
export class OrdersService {
  filters: Filters = { orderId: null, customer: null, vendor: null, page: 1 };
  _orders: OrdersDetail[];
  loading: boolean = true;

  constructor (private http: HttpClient) {}

  query(filters): void {
    this.http
    .get(`${environment.api_url}/orders`, {params: filters})
    .pipe(catchError(this.formatErrors))
    .subscribe((data:OrdersDetail) => {
      this.loading = false;
      this._orders = data;
      if (this.filters.orderId) {
        this._orders = this.filterBy('id', this.filters.orderId);
      }
      if (this.filters.customer) {
        this._orders = this.filterBy('customer', this.filters.customer);
      }
      if (this.filters.vendor) {
        this._orders = this.filterBy('vendor', this.filters.vendor);
      }
    });
  }

  get(id: number): Observable<{order: Order}> {
    return this.http
      .get(`${environment.api_url}/orders/${id}`)
      .pipe(catchError(this.formatErrors));
  }

  changeFilters(filters: Filters): void {
    this.filters = filters;
    this.refetch();
  }

  private filterBy(field: string, value: string): Order[] {
    return this._orders.filter(o => {
      return (''+o[field]).toLowerCase().includes(value.toLowerCase());
    });
  }

  get orders(): OrdersDetail {
    return this._orders;
  }

  private refetch(): void {
    const r:any = {};

    const {orderId, customer, vendor, page} = this.filters;
    if (customer != null) r.customer = customer;
    if (orderId != null) r.orderId = orderId;
    if (page != null) r.page = page;
    if (vendor != null) r.vendor = vendor;
    this.query(this.filters);
  }

  private formatErrors(error: any) {
    return new ErrorObservable(error.error);
  }
}

