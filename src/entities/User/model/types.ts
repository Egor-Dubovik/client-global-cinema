export interface IUser {
	_id: string;
	email: string;
	isAdmin?: boolean;
	favorites?: string[];
	createdAt: string;
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface IUserData {
	user: IUser | null;
	isLoading: boolean;
}

export interface IAuthResponse extends ITokens {
	user: IUser;
}

export interface IAuthParams {
	email: string;
	password: string;
}

export interface IUserEditInput extends Pick<IUser, 'email' | 'isAdmin'> {
	password: string | null;
}
