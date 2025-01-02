
'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Sun, Moon } from 'lucide-react'

const ThemeToggler = (props: { className?: string; isScrolled?: boolean }) => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme, resolvedTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<button
			className={`p-2 border border-transparent rounded-lg hover:bg-ownPink-400 hover:bg-opacity-10 duration-500 hover:border-ownPink-400  ${
				props.className
			} `}
			onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
			aria-label='Change theme'>
			{theme === 'dark' || resolvedTheme === 'dark' ? (
				<Moon className={`text-ownYellow-400 `} />
			) : (
				<Sun className='text-ownPurple-400' />
			)}
		</button>
	)
}

export default ThemeToggler