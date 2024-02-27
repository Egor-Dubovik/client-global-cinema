import cn from 'classnames';

export const ErrorMessage = ({ message, className }: { message: string; className?: string }) => {
	return <p className={cn('text-error-500', className)}>{message}</p>;
};
