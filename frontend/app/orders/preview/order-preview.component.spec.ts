import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  DebugElement,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

import { OrderPreviewComponent } from './order-preview.component';

describe('OrderPreviewComponent', () => {
  let component: OrderPreviewComponent;
  let fixture: ComponentFixture<OrderPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderPreviewComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPreviewComponent);
    component = fixture.componentInstance;
    component.order = {
      "id":1824,
      "lastModified":"2018-03-07T10:52:15.000Z",
      "customer":"AlphaBreakers",
      "vendor":"Mando's",
      "commissionRate":0.15,
      "requestedDeliveryDate":"2018-04-09T07:30:00.000Z",
      "price":{"delivery":0,"items":5299.75,"total":5299.75,"vatRate":20,"vatableItems":0,"vatAmount":0},
      "paymentType":"CARD",
      "headcount":83,
      "servingStyle":"INDIVIDUAL_PORTIONS",
      "deliveredAt":"2018-04-09T08:56:36.000Z",
      "delayMinutes":0,
      "lateReason":null,
      "packaging":"VENDOR_PROVIDED",
      "driverName":"Nelson Piquet",
      "deliveryLocation":{"lat":51.506497,"long":-0.044610999999999984},
      "currentLocation":{"lat":51.513181,"long":-0.01464299999999999},
      "vendorLocation":{"lat":51.48927200000001,"long":-0.12503999999999998}
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render order preview', () => {
    const s  = fixture.debugElement.nativeElement;
    const ts = s.querySelectorAll('.order-preview');

    expect(ts.length).toEqual(1);
  });
});
