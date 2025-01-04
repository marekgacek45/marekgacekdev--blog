import Image from 'next/image'
import LinkBtn from '@/components/link-btn'


const NotFound = () => {
	return (
		<div className=' relative  h-[85vh]  sm:h-[calc(73vh-76px)] mt-[76px]   '>
		<Image
				src='/hero-poster.webp'
				alt='cyberpunk world'
				className='absolute inset-0 w-full h-full object-cover '
				width={1920}
				height={1080}
				priority
				quality={70}
			/> */

			<div className='bg-black absolute top-0 right-0 left-0 bottom-0 opacity-50'></div>

			<div className='absolute inset-0 max-w-screen-lg flex flex-col justify-center items-center text-center  gap-6 md:gap-12  px-6 sm:px-0  mx-auto '>
				<h1 className='text-[2.6rem] md:text-7xl xl:text-8xl 2xl:text-9xl font-heading text-ownYellow-400 uppercase leading-normal sm:leading-6 sm:tracking-wide '>
					404
					<br /> Page not found
				</h1>

				<div className='flex flex-col md:flex-row gap-6 md:gap-12 mt-6 md:mt-12  lg:mt-0 2xl:mt-16'>
					<LinkBtn href='/'>Home</LinkBtn>
				</div>
			</div>
		</div>
	)
}

export default NotFound
