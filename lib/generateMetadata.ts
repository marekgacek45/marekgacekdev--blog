import { Metadata } from 'next'

export const generateMetadata = ({
	title = 'Marek Gacek Blog - FullStack Developer',
	description = "Explore Marek Gacek's blog for expert insights on web development, programming tutorials, and the latest in tech trends. Stay updated with tips, tools, and techniques.",
	path = '/',
}: {
	title?: string
	description?: string
	path?: string
}): Metadata => {
	const metadataBase = new URL('https://blog.marekgacekdev.pl')
	const fullPath = path === '/' ? metadataBase.href : new URL(path, metadataBase).href

	return {
		metadataBase,
		title: {
			default: title,
			template: `%s | Marek Gacek - FullStack Developer`,
		},
		description,
		generator: 'Next.js',
		applicationName: 'Marek Gacek Blog - FullStack Developer',
		referrer: 'origin-when-cross-origin',
		keywords: ['Next.js Development', 'React Tutorials', 'JavaScript Frameworks', 'Web Development Tools','Programming Tips and Tricks'],
		authors: { name: 'Marek Gacek', url: 'https://marekgacekdev.pl' },
		creator: 'Marek Gacek',
		publisher: 'Marek Gacek',
		alternates: {
			canonical: fullPath,
		},
		openGraph: {
			title,
			description,
			type: 'website',
			locale: 'en_EN',
			url: fullPath,
			siteName: 'Marek Gacek Blog - FullStack Developer',
		},
	}
}
