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
  _orders: Order[];
  _pageSize: number;
  _total: number;

  constructor (private http: HttpClient) {}

  query(filters): void {
    this.http
      .get(`${environment.api_url}/orders`, {params: filters})
      .pipe(catchError(this.formatErrors))
      .subscribe((data:OrdersDetail) => {
        this._orders = data.items;
        this._pageSize = data.pageSize;
        this._total = data.total;
        // TODO(vpoddar): Temp implementation, prefer server side filtering.
        this.filter();
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

  get orders(): Order[] {
    return this._orders;
  }

  get pages(): number[] {
    if (this._total && this._pageSize) {
      return Array.from(Array(Math.ceil(this._total / this._pageSize)), (_, i) => i + 1);
    }
    return [1];
  }

  get pageSize(): number {
    return this._pageSize;
  }

  private filter() {
    Object.keys(this.filters)
          .filter(k => k !== 'page')
          .filter(k => this.filters[k] != null)
          .forEach(k => {
            const value  = (''+this.filters[k]).toLowerCase();
            this._orders = this._orders
              .filter(o => (''+o[k]).toLowerCase().includes(value));
          });
  }

  private refetch(): void {
    const r:any = {};

    const {orderId, customer, vendor, page} = this.filters;
    if (customer != null) r.customer = customer;
    if (orderId != null) r.orderId = orderId;
    if (page != null) r.page = page;
    if (vendor != null) r.vendor = vendor;
    this.query(r);
  }

  private formatErrors(error: any) {
    return new ErrorObservable(error.error);
  }
}

