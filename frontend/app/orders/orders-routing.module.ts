import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderListComponent } from './list/order-list.component';
import { OrderPageComponent } from './page/order-page.component';
import { FilterAndOrders } from './filter-and-orders.component';
import { OrderResolver } from './order-resolver.service';

const routes: Routes = [
  {
    path: 'orders',
    children: [
      { path: ':id', component: OrderPageComponent },
      { path: '', component: FilterAndOrders }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
