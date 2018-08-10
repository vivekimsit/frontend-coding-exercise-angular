import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators/catchError';

import { Order } from '../models';
import { OrderListService } from './order-list.service';

@Injectable()
export class OrderResolver implements Resolve<Order> {
  constructor(
    private ordersService: OrderListService,
    private router: Router,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.ordersService.get(route.params['id'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
