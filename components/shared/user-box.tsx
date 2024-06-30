'use client'

import { SignOutButton, useUser } from '@clerk/nextjs'
import { LogOut } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

function UserBox() {
	const { user } = useUser()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className='size-10 md:size-12 cursor-pointer'>
					<AvatarImage src={user?.imageUrl} />
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='w-[300px]'
				align='start'
				alignOffset={11}
				forceMount
			>
				<div className='flex flex-col space-y-4 p-2'>
					<div className='flex items-center gap-x-2'>
						<div className='rounded-md bg-secondary p-1'>
							<Avatar className='size-8'>
								<AvatarImage src={user?.imageUrl} />
							</Avatar>
						</div>

						<div className='space-y-1'>
							<p className='line-clamp-1 font-SpaceGrotesk text-sm'>
								{user?.fullName}
							</p>
							<p className='text-xs font-medium font-SpaceGrotesk leading-none text-muted-foreground'>
								{user?.emailAddresses[0].emailAddress}
							</p>
						</div>
					</div>
				</div>

				<DropdownMenuSeparator />

				<DropdownMenuItem
					asChild
					className='w-full cursor-pointer text-muted-foreground bg-red-700 text-white mt-1'
				>
					<SignOutButton>
						<div className='flex items-center justify-between w-full'>
							<div className='font-SpaceGrotesk flex items-center justify-between w-[100%]'>
								Chiqish <LogOut size={17} />
							</div>
						</div>
					</SignOutButton>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserBox
