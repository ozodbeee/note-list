'use client'

import { createList } from '@/actions/list.action'
import { ICreateList } from '@/actions/types'
import { useUser } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Form, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

interface CreateNoteFormProps {
	onClose: () => void
}

function CreateNoteForm({ onClose }: CreateNoteFormProps) {
	const [isLoading, setIsLoading] = useState(false)

	const { user } = useUser()

	const contactSchema = z.object({
		title: z.string().min(3, {
			message: 'Sarlavha yozishni unutingiz!',
		}),
		description: z.string().min(3, {
			message: 'Tavsif yozishni unutingiz!',
		}),
	})

	const form = useForm<z.infer<typeof contactSchema>>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			title: '',
			description: '',
		},
	})

	function onSubmit(values: z.infer<typeof contactSchema>) {
		setIsLoading(true)
		const promise = createList(values as ICreateList, user?.id as string)
			.then(() => {
				form.reset()
				onClose()
			})
			.finally(() => {
				setIsLoading(false)
			})

		toast.promise(promise, {
			loading: 'Yuklanmoqda...',
			success: 'Muvaffaqiyatli yaratilgan!',
			error: 'Nimadir notogri bajarildi',
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<p className='font-SpaceGrotesk font-medium'>Sarlavha</p>

							<Input
								placeholder='Sarlavha yozing...'
								disabled={isLoading}
								{...field}
								className='font-SpaceGrotesk'
							/>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem className='mt-3'>
							<p className='font-SpaceGrotesk font-medium'>Tavsif</p>

							<Textarea
								placeholder='Tavsif yozing...'
								disabled={isLoading}
								{...field}
								className='font-SpaceGrotesk'
							/>

							<FormMessage />
						</FormItem>
					)}
				/>

				<Button className='w-full mt-5' type='submit' disabled={isLoading}>
					{isLoading ? (
						<div className='flex items-center gap-2' role='button'>
							<Loader2 size={19} className='animate-spin' />
							<span className='font-Montserrat font-bold'>
								Iltimos kuting...
							</span>
						</div>
					) : (
						<span className='font-Montserrat font-bold'>Hozir saqlash</span>
					)}
				</Button>
			</form>
		</Form>
	)
}

export default CreateNoteForm
