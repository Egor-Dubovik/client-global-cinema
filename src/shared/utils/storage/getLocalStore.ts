export const getLocalStore = (key: string) => {
	if (typeof localStorage !== 'undefined') {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	}
	return null;
};
