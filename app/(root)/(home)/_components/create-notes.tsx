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
import { useState } from 'react'

function CreateNotes() {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpenChange = (open: boolean) => {
		setIsOpen(open)
	}

	return (
		<Dialog open={isOpen} onOpenChange={handleOpenChange}>
			<DialogTrigger>
				<Button className='font-SpaceGrotesk'>Yangi qayd yarating</Button>
			</DialogTrigger>
			<DialogContent>
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
