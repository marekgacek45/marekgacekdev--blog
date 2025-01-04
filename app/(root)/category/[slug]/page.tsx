import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Post, Category } from '@/sanity/lib/interface'
import { GET_CATEGORIES_WITH_POSTS, GET_POSTS_BY_CATEGORY } from '@/sanity/lib/queries'

import Hero from '@/components/hero'
import LinkBtn from '@/components/link-btn'
import ColorSpan from '@/components/color-span'
import FilterList from '@/components/filter-list'
import PostsGrid from '@/components/posts-grid'

export const revalidate = 60

function capitalizeFirstLetter(text: string) {
	return text.charAt(0).toUpperCase() + text.slice(1)
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
	const { slug } = await params

	return {
		title: `${capitalizeFirstLetter(slug)} Posts `,
		alternates: {
			canonical: `https://blog.marekgacekdev.pl/category/${slug}`,
		},
	}
}

export default async function Blog({ params }: { params: { slug: string } }) {
	const { slug } = await params

	const categories: Category[] = await GET_CATEGORIES_WITH_POSTS()
	const posts: Post[] = await GET_POSTS_BY_CATEGORY(slug)

	if (!categories.find(category => category.slug === slug)) notFound()

	return (
		<>
			<Hero
				title='Blog'
				marqueeText={
					<>
						posts from category <ColorSpan>{slug}</ColorSpan>
					</>
				}
			/>
			<div className='px-6 sm:px-7 pb-20'>
				{/* categories */}

				<section className='max-w-screen-2xl mx-auto pb-16'>
					<FilterList title='Categories'>
						<LinkBtn small href='/'>
							All
						</LinkBtn>
						{categories.map((category, index) => (
							<LinkBtn
								key={`${category.slug}-${index}`}
								small
								href={`/category/${category.slug}`}
								className={`${slug === category.slug ? 'bg-ownTurquise-400 hover:bg-ownTurquise-600' : ''}`}>
								{category.title}
							</LinkBtn>
						))}
					</FilterList>
				</section>
				{/* posts */}
				<PostsGrid posts={posts} />
			</div>
		</>
	)
}
