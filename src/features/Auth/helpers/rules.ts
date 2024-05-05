import { AUTH_ERRORS } from '@/features/Auth/constants';

import { REG_EXP_EMAIL, REG_EXP_PASSWORD } from '@/shared/constants/regexp';

export const getEmailRules = () => ({
	required: AUTH_ERRORS.EMAIL_REQUIRED,
	pattern: { value: REG_EXP_EMAIL, message: AUTH_ERRORS.VALID_EMAIL },
});

export const getPasswordRules = () => ({
	required: AUTH_ERRORS.PASSWORD_REQUIRED,
	pattern: {
		value: REG_EXP_PASSWORD,
		message: AUTH_ERRORS.PASSWORD,
	},
});
