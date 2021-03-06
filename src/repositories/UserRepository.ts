import fs from 'fs';
import CustomError from '../errors/CustomError';
import { verifyIfEmailIsUsed } from '../helpers/Helpers';

import User from '../models/User';

export function getUser(id: string): any {
  const usersRepo = getUsers();
  const user = usersRepo.users.filter((user: User) => user.id === id);

  if (!user[0]) {
    throw new CustomError('User not found', 404);
  }

  return user;
}

export function getUsers(): any {
  const usersJson = fs.readFileSync('./src/users.json', 'utf-8');

  const users = JSON.parse(usersJson);

  return users;
}

export function save(user: User): void {
  const usersRepo = getUsers();
  usersRepo.users.push(user);
  usersRepo.users.sort();
  const usersJson = JSON.stringify(usersRepo);
  fs.writeFileSync('./src/users.json', usersJson, 'utf-8');
}

export function updateUser(user: User): any {
  const usersRepo = getUsers();
  const oldDataUser = usersRepo.users.filter(
    (userToUpdate: User) => userToUpdate.id === user.id,
  );

  if (!oldDataUser[0]?.id) {
    throw new CustomError('Not found', 404);
  }

  const elementPosition = usersRepo.users
    .map((us: User) => us.id)
    .indexOf(user.id);
  const objectFound = usersRepo.users[elementPosition];

  verifyIfEmailIsUsed(user.email);

  const updatedUser = {
    id: oldDataUser[0].id,
    email: user.email,
    password: user.password,
  };

  usersRepo.users.splice(elementPosition, 1);
  usersRepo.users.push(updatedUser);

  fs.writeFileSync('./src/users.json', JSON.stringify(usersRepo), 'utf-8');

  return updatedUser;
}

export function deleteUser(id: string): void {
  const usersRepo = getUsers();
  if (usersRepo.users.length === 0) {
    throw new CustomError('Not found', 404);
  }

  const elementPosition = usersRepo.users.map((us: User) => us.id).indexOf(id);
  const objectFound = usersRepo.users[elementPosition];
  usersRepo.users.splice(elementPosition, 1);
  fs.writeFileSync('./src/users.json', JSON.stringify(usersRepo), 'utf-8');
}

export function deleteAll() {
  const usersRepo = getUsers();
  if (usersRepo.users.length === 0) {
    throw new CustomError('Nothing to remove', 404);
  }

  usersRepo.users = [];

  fs.writeFileSync('./src/users.json', JSON.stringify(usersRepo), 'utf-8');
}
