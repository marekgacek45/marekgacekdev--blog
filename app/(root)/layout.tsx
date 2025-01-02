import Footer from '@/components/footer'
import Navbar from '@/components/nav/navbar'
import React from 'react'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
