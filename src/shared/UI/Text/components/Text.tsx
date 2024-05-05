import cn from 'classnames';

interface IProps {
	className?: string;
	children: React.ReactNode;
}

export const Text = ({ className, children }: IProps) => {
	return <p className={cn('text-gray-300', className)}>{children}</p>;
};
