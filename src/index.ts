import express from 'express';

import routes from './routes';

const baseUrl = '/api/v1/users';

const app = express();

app.use(express.json());
app.use(baseUrl, routes);

app.listen(3000, () => {
  console.log('🚀 Server running at localhost:3000');
});
