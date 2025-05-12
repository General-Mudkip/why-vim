import { Funnel_Display, Space_Mono, Share_Tech_Mono, Fira_Code } from 'next/font/google';

export const funnel = Funnel_Display({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-funnel',
});

// handle bold and italic
export const space = Space_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-space',
	weight: ['400', '700'],
	style: ['normal', 'italic'],
});

export const share = Share_Tech_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-share',
	weight: "400",
});

export const fira = Fira_Code({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-fira',
});
