export interface Category {
	_id: string
	title: string
	slug: string
}

export interface Post {
	_id: string
	title: string
	slug: string
	thumbnail: any
	publishedAt: string
	excerpt: string
	body: any
	content: any
	categories: Array<Category>
}
