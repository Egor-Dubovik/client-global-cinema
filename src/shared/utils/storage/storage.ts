import Cookies from 'js-cookie';

import { IAuthResponse, ITokens } from '@/entities/User';

export const saveTokensToCookies = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken);
	Cookies.set('refreshToken', data.refreshToken);
};

export const removeTokensFromCookies = () => {
	Cookies.remove('accessToken');
	Cookies.remove('refreshToken');
};

export const saveUserDataToStorage = (data: IAuthResponse) => {
	saveTokensToCookies(data);
	localStorage.setItem('user', JSON.stringify(data.user));
};

export const clearUserDataFromStorage = () => {
	removeTokensFromCookies();
	localStorage.removeItem('user');
};
