export interface IUser {
	user: { _id: string; email: string; isAdmin?: boolean; favorites?: string[] };
	refreshToken: string;
	accessToken: string;
}
