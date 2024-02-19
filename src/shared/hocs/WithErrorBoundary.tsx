import { IError } from '@/shared/types/api.type';

interface IProps {
	data: any | IError;
	children: React.ReactNode;
}

export const WithErrorBoundary = ({ children, data }: IProps) => {
	if ('error' in data) return <p>{data.error}</p>;
	return <>{children}</>;
};
