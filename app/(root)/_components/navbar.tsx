import ModeToggle from '@/components/shared/mode-toggle'
import UserBox from '@/components/shared/user-box'
import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import Mobile from './mobile'

function Navbar() {
	return (
		<div className='fixed inset-0 h-[10vh] bg-background backdrop-blur-xl w-full border-b z-50'>
			<div className='px-4 lg:px-8 mx-auto h-full flex items-center justify-between'>
				<div className='flex gap-2 items-center'>
					<Mobile />
					<Link href={'/'}>
						<h1 className='font-bold text-3xl font-SpaceGrotesk'>
							Note
							<span className='text-primary'>List</span>
						</h1>
					</Link>
				</div>
				<div className='flex items-center gap-2'>
					<ModeToggle />

					<SignedIn>
						<UserBox />
					</SignedIn>

					<SignedOut>
						<Link href={'/sign-in'}>
							<Button className='flex items-center gap-1'>
								<span>Kirish</span>
								<LogIn size={17} />
							</Button>
						</Link>
					</SignedOut>
				</div>
			</div>
		</div>
	)
}

export default Navbar
