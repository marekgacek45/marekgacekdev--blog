import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PortableText } from '@portabletext/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { GET_OTHER_POSTS, GET_POST_BY_SLUG } from '@/sanity/lib/queries'
import type { Post } from '@/sanity/lib/interface'
import { urlFor } from '@/sanity/lib/image'

import CategoryList from '@/components/category-list'
import PostsGrid from '@/components/posts-grid'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
	const { slug } = await params

	const post: Post = await GET_POST_BY_SLUG(slug)

	return {
		title: `${post.title} `,
		description: `${post.excerpt}`,
		alternates: {
			canonical: `https://blog.marekgacekdev.pl/${post.slug}`,
		},
		openGraph: {
			title: `${post.title} | Marek Gacek Blog`,
			description: `${post.excerpt}`,
			type: 'article',
			locale: 'en_US',
			url: `https://blog.marekgacekdev.pl/${post.slug}`,
			siteName: 'Marek Gacek Blog - FullStack Developer',
			images: [
				{
					url: urlFor(post.thumbnail).url(),
					width: 1200,
					height: 630,
					alt: ` ${post.title} thumbnail`,
				},
			],
		},
	}
}

const myPortableTextComponents = {
	types: {
		image: ({ value }: any) => (
			<Image src={urlFor(value).url()} alt='post' width={700} height={700} className='mx-auto' />
		),
		codeBlock: ({ value }: any) => (
			<SyntaxHighlighter language={value.language} style={nightOwl}>
				{value.code}
			</SyntaxHighlighter>
		),
	},
}

const Post = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params
	const post: Post = await GET_POST_BY_SLUG(slug)
	const otherPosts: Post[] = await GET_OTHER_POSTS(slug)

	if (!post) notFound()

	return (
		<>
			<div className='mt-[76px]  px-6 sm:px-12 py-12 sm:py-24 space-y-32'>
				<article className='space-y-16'>
					{/* HEADER */}
					<div className='max-w-screen-2xl mx-auto flex flex-col  justify-center items-center gap-12 '>
						{/* title */}
						<h1 className='heading max-w-screen-lg text-center '>{post.title}</h1>
						<div className='flex justify-between items-center w-full max-w-screen-lg'>
							{/* publishedAt */}
							<div className='flex flex-col justify-start items-start gap-2'>
								<span className='text-base font-medium'>Posted:</span>
								<span className='text-base'> {new Date(post?.publishedAt).toDateString()}</span>
							</div>
							{/* categories */}
							<CategoryList categories={post.categories} />
						</div>
						{/* thumbnail */}
						<Image
							src={urlFor(post.thumbnail).url()}
							alt={`thumbnail of article -  ${post.title}`}
							className='w-full object-cover'
							width={1498}
							height={842}
							quality={70}
						/>
					</div>
					{/* content */}
					<div className=' mx-auto prose  text-fontPrimary text-lg max-w-screen-lg   dark:prose-invert'>
						<PortableText value={post.content} components={myPortableTextComponents} />
					</div>
				</article>
				<hr className='border-fontDark dark:border-fontLight' />
				{/* otherPosts */}
				{otherPosts.length > 0 && (
					<section>
						<h2 className='heading text-center mb-12'>Discover more</h2>
						<PostsGrid posts={otherPosts} />
					</section>
				)}
			</div>
		</>
	)
}

export default Post
