import Footer from '@/components/footer'
import Navbar from '@/components/nav/navbar'

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
