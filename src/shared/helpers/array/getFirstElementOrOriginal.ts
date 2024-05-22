import { INIT_VALUE } from '@/shared/constants/numbers';

export const getFirstElementOrOriginal = (candidate: unknown) => {
	if (!Array.isArray(candidate)) return candidate;
	return candidate[INIT_VALUE];
};
