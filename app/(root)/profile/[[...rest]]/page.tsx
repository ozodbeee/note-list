'use client'

import { UserProfile } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

function Page() {
	const { resolvedTheme } = useTheme()

	return (
		<div className='mx-4 my-4'>
			<UserProfile
				appearance={{
					baseTheme: resolvedTheme === 'dark' ? dark : undefined,
				}}
			/>
		</div>
	)
}

export default Page
