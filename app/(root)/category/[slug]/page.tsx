import { notFound } from 'next/navigation'
import { Post, Category } from '@/sanity/lib/interface'

import Hero from '@/components/hero'
import LinkBtn from '@/components/link-btn'
import ColorSpan from '@/components/color-span'
import FilterList from '@/components/filter-list'
import PostsGrid from '@/components/posts-grid'
import { GET_CATEGORIES_WITH_POSTS, GET_POSTS_BY_CATEGORY } from '@/sanity/lib/queries'

export const revalidate = 60

function capitalizeFirstLetter(text: string) {
	return text.charAt(0).toUpperCase() + text.slice(1)
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
	return {
		title: `${capitalizeFirstLetter(params.slug)} Posts`,
		description: `Explore Marek Gacek's blog for expert insights on web development, programming tutorials, and the latest in tech trends. Stay updated with tips, tools, and techniques.`,
		openGraph: {
			title: `${capitalizeFirstLetter(params.slug)}  Posts | Marek Gacek - Web Development & Programming`,
			description:
				"Explore Marek Gacek's blog for expert insights on web development, programming tutorials, and the latest in tech trends. Stay updated with tips, tools, and techniques.",
			type: 'website',
			locale: 'en_US',
			url: `https://marekgacekdev.pl/blog/category${params.slug}`,
			siteName: 'Marek Gacek - FullStack Developer',
		},
	}
}

export default async function Blog(props: { params: { slug: string } }) {
	const categories: Category[] = await GET_CATEGORIES_WITH_POSTS()
	const posts: Post[] = await GET_POSTS_BY_CATEGORY(props.params.slug)

	if (!categories.find(category => category.slug === props.params.slug)) notFound()

	return (
		<>
			<Hero
				title='Blog'
				marqueeText={
					<>
						posts from category <ColorSpan>{props.params.slug}</ColorSpan>
					</>
				}
			/>
			<main className='px-6 sm:px-7 pb-20'>
				{/* categories */}

				<section className='max-w-screen-2xl mx-auto pb-16'>
					<FilterList title='Categories'>
						<LinkBtn small href='/'>
							All
						</LinkBtn>
						{categories.map((category, index) => (
							<LinkBtn
								key={index}
								small
								href={`/category/${category.slug}`}
								className={`${props.params.slug === category.slug ? 'bg-ownTurquise-400 hover:bg-ownTurquise-600' : ''}`}>
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
