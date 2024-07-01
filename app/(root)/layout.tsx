'use client'

import { ChildProps } from '@/types'
import { useUser } from '@clerk/nextjs'
import HomePage from './(home)/_components/home-page'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'

function Layout({ children }: ChildProps) {
	const { user } = useUser()

	if (!user) {
		return <HomePage />
	}

	return (
		<div>
			<Navbar />
			<Sidebar />
			<main className='lg:pt-[10vh] lg:pl-[300px]'>{children}</main>
		</div>
	)
}

export default Layout
