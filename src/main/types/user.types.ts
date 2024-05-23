export interface IUser {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  admin: boolean;
}

export interface IUserAtom {
  user?: IUser | null;
}
