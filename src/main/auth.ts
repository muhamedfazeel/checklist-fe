import { atom, selector } from 'recoil';
import { IUserAtom } from './types/user.types';
import { AUTH_KEY } from './constants/constants';

export const userState = atom<IUserAtom>({
  key: 'user', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const userValue = selector({
  key: 'userValue',
  get: ({ get }) => ({
    isAuthenticated: get(userState).user ? true : false,
  }),
});

export const isAuthenticated = () => localStorage.getItem(AUTH_KEY);
