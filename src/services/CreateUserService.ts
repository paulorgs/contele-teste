import { v4 as uuidv4, v4 } from 'uuid';
import User from '../models/User';
import { save } from '../repositories/UserRepository';

interface Request {
  email: string;
  password: string;
}

export function createUser({ email, password }: Request): any {
  const newUser = {
    id: v4(),
    email: email,
    password: password,
  } as User;

  save(newUser);

  return newUser;

  // let usersjson = fs.readFileSync('./src/users.json', 'utf-8');

  // let users = JSON.parse(usersjson);
  // console.log(usersjson);

  // console.log(users);

  // users.users.push(newUser);
  // usersjson = JSON.stringify(users);
  // fs.writeFileSync('./src/users.json', usersjson, 'utf-8');
}
