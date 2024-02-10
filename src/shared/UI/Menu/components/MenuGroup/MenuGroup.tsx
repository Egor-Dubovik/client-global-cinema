import styles from './MenuGroup.module.scss';

interface IMenuGroup {
	title: string;
	children: React.ReactNode;
}

export const MenuGroup = ({ title, children }: IMenuGroup) => {
	return (
		<div className={styles.group}>
			<h3 className={styles.heading}>{title}</h3>
			<ul className={styles.list}>{children}</ul>
		</div>
	);
};
