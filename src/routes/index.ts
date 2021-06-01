import { Router } from 'express';
import CustomError from '../errors/CustomError';
import User from '../models/User';
import {
  deleteAll,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../repositories/UserRepository';

import { createUser } from '../services/CreateUserService';
const data = require('../users.json');

const routes = Router();

routes.get('/', (request, response) => {
  return response.json(data);
});

routes.get('/:user_id', (request, response) => {
  const user = getUser(request.params.user_id);

  return response.json(user);
});

routes.post('/', (request, response) => {
  const { email, password } = request.body;
  if (typeof email !== 'string' || typeof password !== 'string') {
    throw new CustomError('This field must be string', 400);
  }
  const user = createUser({ email, password });

  return response.json(user);
});

routes.put('/:user_id', (request, response) => {
  const { email, password } = request.body;

  if (typeof email !== 'string' || typeof password !== 'string') {
    throw new CustomError('This field must be string', 400);
  }
  const usersRepo = getUsers();
  const user = usersRepo.users.filter(
    (user: User) => user.id === request.params.user_id,
  );

  if (!user) {
    return response.status(404).send('Not found');
  }
  const updatedUser = updateUser({
    id: request.params.user_id,
    email,
    password,
  });

  return response.json(updatedUser);
});

routes.delete('/', (request, response) => {
  deleteAll();

  return response.status(204).send();
});

routes.delete('/:user_id', (request, response) => {
  deleteUser(request.params.user_id);

  return response.status(204).send();
});

export default routes;
