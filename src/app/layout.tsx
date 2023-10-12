import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Home page',
	description: 'Home page',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="root-layout">{children}</div>
			</body>
		</html>
	);
}
