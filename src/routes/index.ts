import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.send({ ok: true }));

routes.get('/:users_id', (request, response) => response.send({ ok: true }));

routes.post('/', (request, response) => response.send({ ok: true }));

routes.put('/:users_id', (request, response) => response.send({ ok: true }));

routes.delete('/', (request, response) => response.send({ ok: true }));

routes.delete('/:users_id', (request, response) => response.send({ ok: true }));

export default routes;
