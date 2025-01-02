import ThemeToggler from '@/components/nav/theme-toggler'
import NavLink from '@/components/nav/nav-link'
import SocialLink from '@/components/nav/social-link'

const MobileMenu = ({links, socials, onLinkClick}: {
	links: Array<{ href: string; label: string; target?: string; rel?: string }>
	socials: Array<{ href: string; icon: any; label: string }>
	onLinkClick: () => void
}) => {
	return (
		<div className='fixed top-[80px] right-0 left-0 bottom-0  w-full bg-bgLight-200  dark:bg-bgDark-400   animate-fadeIn z-50'>
			<div className='absolute top-6 right-6'>
				<ThemeToggler />
			</div>
			<div className='flex flex-col justify-center h-full  items-center gap-8'>
				<ul className='flex flex-col justify-center  items-center gap-12 sm:gap-16 '>
					{links.map((link, index) => (
						<NavLink link={link} key={index} mobile onClick={onLinkClick} />
					))}
				</ul>
				<ul className='flex gap-4 sm:gap-8 mt-8 sm:mt-16'>
					{socials.map((item, index) => (
						<SocialLink item={item} key={index} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default MobileMenu