import CreateNotes from '@/app/(root)/(home)/_components/create-notes'
import { File } from 'lucide-react'

function NotFile() {
	return (
		<div className='h-[70vh] w-full flex flex-col items-center justify-center'>
			<div className='flex h-20 w-20 items-center justify-center rounded-full bg-primary/10'>
				<File className='w-10 h-10 text-primary' />
			</div>

			<h2 className='mt-6 text-xl font-SpaceGrotesk font-semibold'>
				Sizda hech qanday qayd yaratilmagan
			</h2>
			<p className='mb-8 mt-2 text-center text-[15px] leading-4 text-muted-foreground max-w-sm mx-auto font-SpaceGrotesk'>
				Sizda hozirda hech qanday qayd yo{"'"}q. Iltimos, ba{"'"}zilarini
				yarating ularni shu yerda ko{"'"}ring.
			</p>

			<CreateNotes />
		</div>
	)
}

export default NotFile
