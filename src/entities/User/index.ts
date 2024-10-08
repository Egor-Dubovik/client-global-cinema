'use client';

export type {
	IUser,
	IUserEditInput,
	IAuthParams,
	ITokens,
	IUserData,
	IAuthResponse,
} from './model/types';
export { userReducer } from './model/reducer';
export { userActions } from './model/reducer';
export * as userThunks from './model/thunks';

export { useAuth } from './hooks/useAuth';
export { useAuthRedirect } from './hooks/useAuthRedirect';

export { AuthService } from './api/services/auth';
