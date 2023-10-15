import Image from 'next/image';
import Link from 'next/link';

import logoIcon from '@/assets/icons/logo.png';

const Logo = () => {
	return (
		<Link href="/" className="flex items-center gap-3 px-layout mb-10">
			<span className="uppercase">Global cinema</span>
			<Image src={logoIcon} width={48} height={48} alt="logo" draggable={false} />
		</Link>
	);
};

export default Logo;
