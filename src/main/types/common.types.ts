import { IUser } from './user.types';

export interface ILoginResponse {
  user: IUser;
  iat: number;
  exp: number;
}
