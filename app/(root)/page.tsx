import type { Metadata } from 'next'

import { GET_ALL_POSTS, GET_CATEGORIES_WITH_POSTS } from '@/sanity/lib/queries'
import { Post, Category } from '@/sanity/lib/interface'

import Hero from '@/components/hero'
import LinkBtn from '@/components/link-btn'
import FilterList from '@/components/filter-list'
import PostsGrid from '@/components/posts-grid'

export const revalidate = 60

export const metadata: Metadata = {
	title: 'Blog',
	description:
		"Explore Marek Gacek's blog for expert insights on web development, programming tutorials, and the latest in tech trends. Stay updated with tips, tools, and techniques.",
	openGraph: {
		title: 'Blog | Marek Gacek - Web Development & Programming',
		description:
			"Explore Marek Gacek's blog for expert insights on web development, programming tutorials, and the latest in tech trends. Stay updated with tips, tools, and techniques.",
		type: 'website',
		locale: 'en_US',
		url: 'https://marekgacekdev.pl',
		siteName: 'Marek Gacek - FullStack Developer',
	},
}

export default async function Blog() {
	const posts: Post[] = await GET_ALL_POSTS()
	const categories: Category[] = await GET_CATEGORIES_WITH_POSTS()

	return (
		<>
			<Hero title='Blog' marqueeText='unlock the code' />
			<main className='px-6 sm:px-7 pb-20'>
				{/* categories */}
				<section className='max-w-screen-2xl mx-auto pb-16'>
					<FilterList title='Categories'>
						{categories.map((category, index) => (
							<LinkBtn key={index} small href={`/category/${category.slug}`}>
								{category.title}
							</LinkBtn>
						))}
					</FilterList>
				</section>
				{/* posts */}
				<PostsGrid posts={posts} />
			</main>
		</>
	)
}
