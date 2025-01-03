import React from 'react'

const FilterList = ({ children, title }: { children: React.ReactNode; title: string }) => {
	return (
		<div className='flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center  items-center  '>
			<h2 className='text-xl font-heading '>{title}:</h2>
			<div className='flex flex-wrap justify-center  gap-6 '>{children}</div>
		</div>
	)
}

export default FilterList
