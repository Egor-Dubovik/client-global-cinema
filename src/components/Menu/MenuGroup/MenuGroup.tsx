import styles from './MenuGroup.module.scss';

interface IMenuGroup {
	title: string;
	children: React.ReactNode;
}

const MenuGroup = ({ title, children }: IMenuGroup) => {
	return (
		<div className="mb-12 animate-fade">
			<h3 className={styles.heading}>{title}</h3>
			<ul>{children}</ul>
		</div>
	);
};

export default MenuGroup;
