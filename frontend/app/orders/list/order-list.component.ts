import { Component, Input, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";

import { Order } from "../../models";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  @Input() orders: Order[];
  @Input() limit: number;
}
