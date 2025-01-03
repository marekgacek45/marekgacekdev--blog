import { sanityFetch } from './client'

export const GET_CATEGORIES_WITH_POSTS = async () => {
	const query = `
    *[_type == "category" && count(*[_type == "post" && references(^._id)]) > 0]{
    title,
    "slug": slug.current,
    "postCount": count(*[_type == "post" && references(^._id)])
    } | order(postCount desc)`

	const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}

export const GET_ALL_POSTS = async () => {
	const query = `
    *[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    thumbnail,
    excerpt
    }`

	const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}
