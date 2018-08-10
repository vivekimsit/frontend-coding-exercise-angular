import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderPageComponent } from './order-list/order-page.component';
import { OrderPreviewComponent } from './order-list/order-preview.component';
import { OrderListService } from './order-list/order-list.service';
import { OrderResolver } from './order-list/order-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OrderListComponent,
    OrderPageComponent,
    OrderPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [
    OrderListService,
    OrderResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
