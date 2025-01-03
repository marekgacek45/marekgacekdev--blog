import { Post } from '@/sanity/lib/interface'
import PostCard from './post-card'

const PostsGrid = ({ posts }: { posts: Post[] }) => {
	return (
		<section className=' mx-auto'>
			<div
				className='grid lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-x-8 gap-y-16'>
				{posts.map((post, index) => (
					<PostCard key={index} post={post} />
				))}
			</div>
		</section>
	)
}

export default PostsGrid
