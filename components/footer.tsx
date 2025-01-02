import Image from 'next/image'
import Link from 'next/link'

import { CopyIcon } from '@/app/utils/icons'

const footerLinks = [
	{ href: 'mailto:marekgacekdev@gmail.com', label: 'Email' },
	{ href: 'https://github.com/marekgacek45', label: 'Github' },
	{ href: 'https://facebook.com/marekgacekdev', label: 'Facebook' },
	{ href: 'https://www.linkedin.com/in/marek-gacek', label: 'Linkedin' },
]

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className='bg-black py-16 px-6 md:px-0'>
			{/* CONTAINER */}
			<div className='max-w-screen-xl flex flex-col lg:flex-row justify-around 2xl:justify-between items-center gap-12 lg:gap-0 mx-auto'>
				{/* info */}
				<div className='flex flex-row justify-center items-center gap-6 sm:gap-16 order-1 lg:order-none'>
					<div className='flex justify-start items-center order-1 sm:order-none'>
						<div>
							<h2 className=' text-3xl md:text-5xl font-heading text-ownYellow-400  hover:text-ownPink-600  duration-150'>
								<Link href='https://marekgacekdev.pl'>
									Marek
									<br />
									Gacek
									<br />
								</Link>
							</h2>

							<span className='flex gap-2  mt-4 text-xl md:text-2xl font-heading text-fontLight  '>
								<CopyIcon className='w-4 fill-white ' />
								{year}
							</span>
						</div>
					</div>
					<div className='max-w-[220px] '>
						<a href='/bolec.gif' target='_blank' rel='noreferrer nofollow'>
							<span className=' text-2xl text-center sm:text-left font-heading text-ownPurple-400 hover:text-ownPink-600 duration-150'>
								In Poland we say:<br></br>
								Coco Jumbo i do przodu! <br />
								
							</span>
						</a>
					</div>
				</div>
				{/* links */}
				<div className='flex flex-wrap justify-start  items-center px-4 lg:px-0'>
					{footerLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							target='_blank'
							rel='noreferrer nofollow'
							className='w-1/2 xl:w-auto flex-grow px-6 py-4 border-2 border-r-1 last:border-r-2 border-fontLight font-text text-lg lg:text-xl text-center sm:text-left text-fontLight  hover:border-dashed hover:animate-shake   hover:text-ownPink-600 hover:border-ownPink-200 dark:hover:text-ownPink-600 dark:hover:border-ownPink-200  duration-150'>
							{link.label}
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer