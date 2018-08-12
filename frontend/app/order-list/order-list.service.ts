import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Order } from '../models';
import { map } from 'rxjs/operators/map';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';

import { Filters } from "../models";

@Injectable()
export class OrderListService {
  filters: Filters = { status: null, customer: null, vendor: null };
  _orders: Order[];
  loading: boolean = true;

  constructor (private http: HttpClient) {}

  query(params: HttpParams): void {
    this.http
      .get(`${environment.api_url}/orders`, { params })
      .pipe(catchError(this.formatErrors))
      .subscribe(data => {
        this.loading = false;
        this._orders = data.items;
        console.log(this._orders.length);
        if (this.filters.customer) {
          this._orders = this.filterBy('customer', this.filters.customer);
        }
        console.log(this._orders.length);
        if (this.filters.vendor) {
          this._orders = this.filterBy('vendor', this.filters.vendor);
        }
        console.log(this._orders.length);
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
      return o[field].toLowerCase().includes(value.toLowerCase());
    });
  }

  get orders(): Order[] {
    return this._orders;
  }

  private refetch(): void {
    const params = new HttpParams();
    const { status, customer, vendor } = this.filters;
    params.set("status", status);
    params.set("customer", customer);
    params.set("vendor", vendor);
    this.query(params);
  }

  private formatErrors(error: any) {
    return new ErrorObservable(error.error);
  }
}
