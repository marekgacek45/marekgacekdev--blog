import { Russo_One, Roboto_Mono, VT323 } from 'next/font/google'

export const font_heading_init = Russo_One({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-heading',
	weight: ['400'],
})

export const font_text_init = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-text',
	weight: ['300', '400', '500', '600', '700'],
})
export const font_accent_init = VT323({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-accent',
	weight: ['400'],
})

export const font_heading = font_heading_init.variable
export const font_text = font_text_init.variable
export const font_accent = font_accent_init.variable
