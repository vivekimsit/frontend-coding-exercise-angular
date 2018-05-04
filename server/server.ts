import * as express from 'express';

const app = express();

const orders = require('./data/orders.json');

app.get('/orders', (req, res) => {
  const page = req.query.page ? Math.max(1, req.query.page) : 1;

  const items = orders.slice(100 * page, 100 * (page + 1));
  res.send({
    page: page,
    pageSize: 100,
    total: orders.length,
    count: items.length,
    items
  });
});

app.listen(4300, () => console.log('Example app listening on port 4300!'));
