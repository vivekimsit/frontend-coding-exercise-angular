import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderListService } from './order-list/order-list.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [
    OrderListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
