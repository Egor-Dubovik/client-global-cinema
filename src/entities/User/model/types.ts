export interface IUser {
	_id: string;
	email: string;
	isAdmin?: boolean;
	favorites?: string[];
}

export interface IUserData {
	user: IUser | null;
	isLoading: boolean;
	// refreshToken: string;
	// accessToken: string;
}
