'use client'

import { deleteList } from '@/actions/list.action'
import { IList } from '@/app.types'
import { format } from 'date-fns'
import { Loader2, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
const { uz } = require('date-fns/locale')

interface Props {
	list: IList
}

function ListsCard({ list }: Props) {
	const date = new Date(list.createdAt)
	const formattedDate = format(date, 'EEEE  dd - MMMM yyyy', { locale: uz })
	const formattedDateClock = format(date, 'HH:mm', { locale: uz })

	const [isLoading, setIsLoading] = useState(false)

	const router = useRouter()

	const onDelete = () => {
		setIsLoading(true)
		const promise = deleteList(list._id, '/')
			.then(() => router.push('/'))
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Oʻchirilmoqda...',
			success: 'Roʻyxat muvaffaqiyatli oʻchirildi',
			error: 'Roʻyxatni oʻchirishda nimadir xato ketdi',
		})
	}

	return (
		<>
			<div className='border px-5 py-3 rounded-md mt-3 mb-3'>
				<div className='flex items-center justify-between'>
					<div>
						<h1 className='font-SpaceGrotesk text-primary text-[27px] font-bold first-letter:uppercase'>
							{list.title}
						</h1>

						<div className='flex items-center gap-1'>
							<p className='font-SpaceGrotesk'>{formattedDate}</p>
							<p className='font-SpaceGrotesk'> - Soat {formattedDateClock}</p>
						</div>
					</div>

					<div className='flex items-center gap-1'>
						<button
							className=' bg-red-400 dark:bg-red-600 px-2 py-2 rounded-md'
							onClick={onDelete}
							disabled={isLoading}
						>
							{isLoading ? (
								<Loader2 className='animate-spin' size={18} />
							) : (
								<Trash size={18} />
							)}
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default ListsCard
