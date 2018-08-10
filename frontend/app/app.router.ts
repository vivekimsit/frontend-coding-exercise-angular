import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderPageComponent } from './order-list/order-page.component';
import { OrderResolver } from './order-list/order-resolver.service';

const appRoutes: Routes = [
  {
    path: 'orders',
    component: OrderListComponent
  },
  {
    path: 'orders/:id',
    component: OrderPageComponent,
    resolve: {
      order: OrderResolver
    }
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: '**',
    component: HomepageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
