import { GET_ALL_POSTS, GET_CATEGORIES_WITH_POSTS } from '@/sanity/lib/queries'
import { Post, Category } from '@/sanity/lib/interface'

import Hero from '@/components/hero'
import LinkBtn from '@/components/link-btn'
import FilterList from '@/components/filter-list'
import PostsGrid from '@/components/posts-grid'

export const revalidate = 60

const Blog = async () => {
	const posts: Post[] = await GET_ALL_POSTS()
	const categories: Category[] = await GET_CATEGORIES_WITH_POSTS()

	return (
		<>
			<Hero title='Blog' marqueeText='unlock the code' />
			<div className='px-6 sm:px-7 pb-20'>
				{/* categories */}
				<section className='max-w-screen-2xl mx-auto pb-16'>
					<FilterList title='Categories'>
						{categories.map((category, index) => (
							<LinkBtn key={`${category.slug}-${index}`} small href={`/category/${category.slug}`}>
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

export default Blog
