'use client'

import CreateNoteForm from '@/components/forms/create-note'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { PlusIcon } from 'lucide-react'
import { useState } from 'react'

function CreateNotes() {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpenChange = (open: boolean) => {
		setIsOpen(open)
	}

	return (
		<Dialog open={isOpen} onOpenChange={handleOpenChange}>
			<DialogTrigger>
				<Button className='font-SpaceGrotesk hidden md:block'>
					Yangi qayd yarating
				</Button>

				<Button size={'icon'} className='font-SpaceGrotesk md:hidden'>
					<PlusIcon />
				</Button>
			</DialogTrigger>
			<DialogContent className='w-[360px] rounded-md md:w-full'>
				<DialogHeader>
					<DialogTitle className='font-SpaceGrotesk flex flex-col'>
						<span className='text-xl'>Yangi eslatma</span>
						<span className='text-sm text-muted-foreground'>
							Aynan shu yerda siz yangi eslatma yaratishingiz mumkin
						</span>
					</DialogTitle>
				</DialogHeader>

				<div>
					<CreateNoteForm onClose={() => setIsOpen(false)} />
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default CreateNotes
