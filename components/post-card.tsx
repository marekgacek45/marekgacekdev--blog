import React from 'react'
import Image from 'next/image'

import { Post } from '@/sanity/lib/interface'

import { urlFor } from '@/sanity/lib/image'

import Link from 'next/link'

const PostCard = ({post}: { post: Post }) => {
	return (
		<Link href={`/blog/${post.slug}`} className='space-y-4'>
			<Image
				src={urlFor(post.thumbnail).url()}
				alt={post.title}
				className='w-full object-cover aspect-[3/2]'
				height={398}
				width={380}
			/>
			<div>
				<h2 className='text-2xl font-heading font-medium line-clamp-2 '>{post.title}</h2>
				<p className='text-[1.4rem]  text-gray-500 leading-snug line-clamp-4 '>
					{post.excerpt}
				</p>
			</div>
		</Link>
	)
}

export default PostCard