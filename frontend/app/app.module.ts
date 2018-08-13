import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router';
import { HomepageComponent } from './homepage/homepage.component';
import { OrdersService } from './orders/orders.service';
import { OrderResolver } from './orders/order-resolver.service';
import { OrdersModule } from './orders/orders.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    OrdersModule,
    AppRouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    OrdersService,
    OrderResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
