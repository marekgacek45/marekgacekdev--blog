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

export const GET_POSTS_BY_CATEGORY = async (category: string) => {
	const query = `
    *[_type == "post" && references(*[_type == "category" && slug.current == "${category}"]._id)] | order(publishedAt desc) {
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

export const GET_POST_BY_SLUG = async (slug: string) => {
    const query = `
    *[_type == "post" && slug.current == "${slug}"][0]{
    title,
    "slug": slug.current,
    thumbnail,
    excerpt,
    content,
    publishedAt,
    categories[]->{title, slug},
      }`
      const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}
export const GET_OTHER_POSTS = async (slug: string) => {
    const query = `*[_type == "post" && slug.current != "${slug}"] | order(publishedAT asc)[0...4]{
        title,
        "slug": slug.current,
        thumbnail,
        publishedAt,
        categories[]->{title, "slug": slug.current}
    }`

    const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}
