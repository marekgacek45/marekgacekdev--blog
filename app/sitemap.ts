import { Post } from '@/sanity/lib/interface'
import { GET_ALL_POSTS } from '@/sanity/lib/queries'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts: Post[] = await GET_ALL_POSTS()

	const postsUrls = posts.map((post: Post) => ({
		url: `https://blog.marekgacekdev.pl/${post.slug}`,
		lastModified: new Date(),
		priority: 0.9,
	}))

	return [
		{
			url: 'https://blog.marekgacekdev.pl/',
			lastModified: new Date(),
			priority: 1,
		},

		...postsUrls,
	]
}
