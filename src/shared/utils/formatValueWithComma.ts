export const formatValueWithComma = (index: number, length: number, value: string) => {
	return ++index === length ? value : `${value}, `;
};
