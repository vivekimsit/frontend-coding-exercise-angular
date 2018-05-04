// To run this file, call
// ./node_modules/.bin/ts-node server/data/generator/generate.ts [count] [seed] > server/data/orders.json

import { generateRandomOrders } from './generate-random-orders';

const args = process.argv;
const getNumericArg = (index: number, defaultValue: number) => {
  const argValue = args[2 + index];
  if (typeof argValue !== 'undefined') {
    const parsed = parseInt(argValue, 10);
    if (!isNaN(parsed)) {
      return parsed;
    }
  }
  return defaultValue;
};
const count = getNumericArg(0, 10);
const seed = getNumericArg(1, undefined);

console.log(JSON.stringify(generateRandomOrders(count, seed), null, '  '));
