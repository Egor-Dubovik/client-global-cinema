import { useAppSelector } from '@/app/store/rootHooks';

import { IUserData } from '../model/types';

export const useAuth = (): IUserData => useAppSelector((state) => state.user);
