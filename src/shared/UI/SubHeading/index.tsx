import cn from 'classnames';

interface IProps {
	title: string;
	className?: string;
}

export const SubHeading = ({ title, className }: IProps) => {
	return <h2 className={cn('text-white text-xl mb-5 font-semibold', className)}>{title}</h2>;
};
