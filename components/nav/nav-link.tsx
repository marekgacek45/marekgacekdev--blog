
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = (props: {
	link: { href: string; label: string; blank?: boolean; rel?: string }
	onClick: () => void
	mobile?: boolean
}) => {
	const pathname = usePathname()

	const linkColor = props.mobile ? 'text-fontDark dark:text-fontLight' : 'text-fontDark dark:text-fontLight '

	return (
		<li
			onClick={props.onClick}
			className={`text-3xl sm:text-4xl xl:text-xl font-semibold  hover:text-ownPink-600 dark:hover:text-ownPink-600  duration-150 ${
				pathname === props.link.href ? ' text-ownPurple-400 dark:text-ownYellow-400 ' : `${linkColor}  `
			}`}>
			<Link href={props.link.href} target={props.link.blank ? '_blank' : undefined}   rel={props.link.rel}>
				{props.link.label}
			</Link>
		</li>
	)
}

export default NavLink
