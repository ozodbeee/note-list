import { SidebarItems } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Sidebar() {
	const pathname = usePathname()

	return (
		<div className='fixed z-40 pt-[11vh] border-r w-[300px] h-screen'>
			<div className='container mx-auto'>
				{SidebarItems.map((item, index) => (
					<Link
						key={index}
						href={item.href}
						className={cn(
							'flex items-center font-SpaceGrotesk gap-2 mt-2 py-2 px-2 rounded-md hover:bg-secondary',
							pathname === item.href && 'bg-secondary'
						)}
					>
						<item.icon size={18} className='text-primary' />
						{item.label}
					</Link>
				))}
			</div>
		</div>
	)
}

export default Sidebar
