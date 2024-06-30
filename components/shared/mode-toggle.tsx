'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { RxMoon } from 'react-icons/rx'
import { TiWeatherSunny } from 'react-icons/ti'
import { Button } from '../ui/button'

function ModeToggle() {
	const [mount, setMount] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMount(true), [])

	return mount && resolvedTheme === 'dark' ? (
		<Button size={'icon'} onClick={() => setTheme('light')} variant={'ghost'}>
			<TiWeatherSunny className='w-6 h-6' />
		</Button>
	) : (
		<Button size={'icon'} onClick={() => setTheme('dark')} variant={'ghost'}>
			<RxMoon className='w-5 h-5' />
		</Button>
	)
}

export default ModeToggle
