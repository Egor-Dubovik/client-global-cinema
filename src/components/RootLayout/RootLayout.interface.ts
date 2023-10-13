import { ReactNode } from 'react';

export interface IRootLayout {
	renderHeader: () => ReactNode;
	renderFooter: () => ReactNode;
	renderMainContent: () => ReactNode;
	renderSidebarLeft?: () => ReactNode;
	renderSidebarRight?: () => ReactNode;
}
