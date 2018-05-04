import { CUSTOMERS } from './customers';
import { VENDORS } from './vendors';
import * as moment from 'moment';
import { Random } from './random';
import { DRIVERS } from './drivers';

const random = new Random(17);

const randomFrom = (list: string[]) => list[random.next(0, list.length - 1)];
const randomDate = (now: moment.Moment, daysInPast: number, daysInFuture: number) => now.clone()
  .add(random.next(daysInPast, daysInFuture), 'days')
  .startOf('minute')
  .hour(7 + random.next(0, 4) + random.next(0, 4) + random.next(0, 4)) // Between 7 and 21h, but more likely in the middle
  .minutes(30 * random.next(0, 1));
const randomLatLong = () => {
  // Top left 51.528593, -0.204306
  // center 51.507389, -0.127789
  // bottom right 51.462166, -0.006886
  const M = 1000000;
  return {
    lat: 51.462166 + random.next(0, (51.528593 * M - 51.462166 * M)) / M,
    long: -0.204306 + random.next(0, (-0.006886 * M - (-0.204306) * M)) / M
  };
};

const randomOrder = (lastId: number) => {
  const now = moment();

  const price = Math.floor((random.next(50, 300000) + random.next(0, 300000) + random.next(0, 300000)) / 5) * 5 / 100;
  const delivery = [0, 5, 15, 15, 15, 20, 25][random.next(0, 6)];
  const deliveryDate = randomDate(now, -300, 100);
  const deliveredAt = deliveryDate.isBefore(now) ? deliveryDate.clone().add(random.next(-15 * 60, 5 * 3600), 'seconds') : null;
  const id = lastId + random.next(0, 100);
  const order = {
    id,
    customer: randomFrom(CUSTOMERS),
    vendor: randomFrom(VENDORS),
    requestedDeliveryDate: deliveryDate,
    price: {
      delivery,
      items: price,
      total: delivery + price
    },
    deliveredAt,
    driverName: randomFrom(DRIVERS),
    deliveryLocation: randomLatLong(),
    currentLocation: randomLatLong(),
    vendorLocation: randomLatLong(),
  };
  return order;
};

export const generateRandomOrders = (count: number): any[] => {
  let id = random.next(1000, 5000);
  return Array(count).fill(null).map(() => {
    const order = randomOrder(id);
    id = order.id;
    return order;
  });
};

console.log(JSON.stringify(generateRandomOrders(1000), null, '  '));
