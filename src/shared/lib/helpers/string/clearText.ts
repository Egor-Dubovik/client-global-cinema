export const clearText = (string: string, limit: number | null = null): string => {
	const result = string
		.replace(/<[^>]*>/g, '')
		.replace(/&[^;]*./g, ' ')
		.replace(
			/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
			''
		);

	return limit ? result.slice(0, limit) + '...' : result;
};
