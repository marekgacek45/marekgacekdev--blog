import React from 'react'

import Marquee from 'react-fast-marquee'


const Hero = ({title,marqueeText}: { title: string;  marqueeText: string | React.ReactNode; }) => {
	return (
		<div className='mt-[76px] text-center py-12'>
			<h1 className='text-[2.6rem] md:text-7xl xl:text-8xl 2xl:text-9xl font-heading text-ownPink-400 dark:text-ownYellow-400 uppercase leading-normal sm:leading-6 sm:tracking-wide mb-4'>
				{title}
			</h1>
			<Marquee autoFill className=' py-4 text-fontDark dark:text-fontLight'>
				<p className='text mr-4'>{marqueeText}</p>
			</Marquee>
		</div>
	)
}

export default Hero