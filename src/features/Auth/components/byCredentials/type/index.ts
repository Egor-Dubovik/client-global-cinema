import { IAuthParams } from '@/entities/User';

export interface ILoginForm extends IAuthParams {}

export interface IRegisterForm extends IAuthParams {
	repeatPassword: string;
}
