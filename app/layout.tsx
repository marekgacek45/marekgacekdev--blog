import type { Metadata } from 'next'
import { Provider } from '@/app/utils/provider'

import { font_heading, font_text, font_accent } from '@/app/utils/fonts'
import { generateMetadata } from '@/lib/generateMetadata'

import './globals.css'

export const metadata: Metadata = generateMetadata({})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<meta name='apple-mobile-web-app-title' content='marekgacekdev.pl' />
			<body
				className={`${font_heading} ${font_text} ${font_accent} font-text bg-bgLight-400  dark:bg-bgDark-600 text-fontDark dark:text-fontLight selection:bg-ownTurquise-400 duration-300 antialiased`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
