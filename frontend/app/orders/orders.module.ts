import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListComponent } from './list/order-list.component';
import { OrderPageComponent } from './page/order-page.component';
import { OrderPreviewComponent } from './preview/order-preview.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { ComponentsModule } from '../components/components.module';
import { FilterAndOrders } from './filter-and-orders.component';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    OrdersRoutingModule
  ],
  declarations: [
    OrderListComponent,
    OrderPageComponent,
    OrderPreviewComponent,
    FilterAndOrders,
  ],
  providers: [
 
  ],
  exports: [
    OrderListComponent,
    OrderPageComponent,
    OrderPreviewComponent,
  ],
})
export class OrdersModule {}
