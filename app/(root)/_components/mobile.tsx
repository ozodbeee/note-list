'use client'

import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { SidebarItems } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TbMenu2 } from 'react-icons/tb'

function Mobile() {
	const pathname = usePathname()

	return (
		<Sheet>
			<SheetTrigger asChild className='lg:hidden'>
				<TbMenu2 className='size-6' />
			</SheetTrigger>
			<SheetContent
				side={'left'}
				className='dark:bg-gray-900 bg-gray-200 w-[300px]'
			>
				<SheetHeader className='mt-6'>
					<Link href={'/'}>
						<h1 className='font-bold text-3xl font-SpaceGrotesk'>
							Note
							<span className='text-primary'>List</span>
						</h1>
					</Link>
					<Separator className='bg-gray-600' />
				</SheetHeader>
				<div className='pt-[30px]'>
					{SidebarItems.map((item, index) => (
						<Link key={index} href={item.href} className=''>
							<SheetClose
								className={cn(
									'flex gap-2 items-center font-SpaceGrotesk mt-2 py-2 px-2 rounded-md hover:bg-secondary w-full',
									pathname === item.href && 'bg-secondary'
								)}
							>
								<item.icon size={18} className='text-primary' />
								{item.label}
							</SheetClose>
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
