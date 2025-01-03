import React from 'react'
import LinkBtn from '@/components/link-btn'
import { Category } from '@/sanity/lib/interface'

const PostCategoryList = ({ categories }: { categories: Category[] }) => {
	return (
		<div className='flex justify-start items-center gap-4 mt-2'>
			{categories.map((category, index) => (
				<LinkBtn
					key={index}
					small
					href={`/category/${typeof category.slug === 'string' ? category.slug : category.slug?.current}`}>
					{category.title}
				</LinkBtn>
			))}
		</div>
	)
}

export default PostCategoryList
