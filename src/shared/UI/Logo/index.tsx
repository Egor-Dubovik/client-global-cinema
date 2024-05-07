import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import logoIcon from '@/shared/assets/icons/logo.png';
import { APP_NAME } from '@/shared/config/seo/constants';

import styles from './style.module.scss';

interface ILogo {
	className?: string;
}

const Logo = ({ className }: ILogo) => {
	return (
		<Link href="/" className={cn(styles.logo, className)}>
			<span>{APP_NAME}</span>
			{/* <Image src={logoIcon} width={48} height={48} alt="logo" draggable={false} /> */}
		</Link>
	);
};

export default Logo;
