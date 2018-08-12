import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Order } from '../models';
import { catchError } from 'rxjs/operators/catchError';
import { OrderListService } from './order-list.service';

@Injectable()
export class OrderListResolver implements Resolve<Order[]> {
  constructor(
    private ordersService: OrderListService,
    private router: Router,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    //return this.ordersService.orders;
    return Observable.of(true);
  }
}
