interface Location {
  lat: number;
  long: number;
}

interface Price {
  delivery: number;
  items: number;
  total: number;
  vatRate: number;
  vatableItems: number;
  vatAmount: number;
}

export interface Order {
  id: number;
  lastModified: string;
  customer: string;
  vendor: string;
  commissionRate: number;
  requestedDeliveryDate: string;
  price: Price;
  paymentType: string;
  headcount: number;
  servingStyle: string;
  deliveredAt: string;
  delayMinutes: number;
  lateReason: null;
  packaging: string;
  driverName: string;
  deliveryLocation: Location;
  currentLocation: Location;
  vendorLocation: Location;
}
