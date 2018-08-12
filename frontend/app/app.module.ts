import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router';
import { HomepageComponent } from './homepage/homepage.component';
import { FilterAndOrders } from './order-list/filter-and-orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderPageComponent } from './order-list/order-page.component';
import { OrderPreviewComponent } from './order-list/order-preview.component';
import { OrderListService } from './order-list/order-list.service';
import { OrderResolver } from './order-list/order-resolver.service';
import { FiltersCmp } from './filters/filters';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FilterAndOrders,
    OrderListComponent,
    OrderPageComponent,
    OrderPreviewComponent,
    FiltersCmp,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    OrderListService,
    OrderResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
