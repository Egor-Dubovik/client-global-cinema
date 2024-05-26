import { IUser } from '@/entities/User';

export interface IProfileInput extends Pick<IUser, 'email'> {
	password?: string | null;
}
