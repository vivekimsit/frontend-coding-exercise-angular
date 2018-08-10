import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Order } from '../models';
import { map } from 'rxjs/operators/map';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class OrderListService {
  constructor (private http: HttpClient) {}

  query(): Observable<{items: Order[], page: number, pageSize: number, total: number, count: number}> {
    return this.http
      .get(`${environment.api_url}/orders`)
      .pipe(catchError(this.formatErrors));
  }

  get(id: number): Observable<{order: Order}> {
    return this.http
      .get(`${environment.api_url}/orders/${id}`)
      .pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return new ErrorObservable(error.error);
  }
}
