import { getLists } from '@/actions/list.action'
import NotFile from '@/components/shared/not-file'
import { auth } from '@clerk/nextjs/server'
import CreateNotes from './_components/create-notes'
import ListsCard from './_components/lists-card'

async function Page() {
	const { userId } = auth()
	const lists = await getLists(userId as string)

	return (
		<>
			<div className='py-4 px-4 border-b sticky top-[10vh] w-full bg-background backdrop-blur-xl'>
				<div className='flex justify-between'>
					<div>
						<h1 className='font-SpaceGrotesk font-bold text-xl lg:text-2xl'>
							Sizning eslatmalaringiz
						</h1>
						<p className='font-SpaceGrotesk hidden lg:block'>
							Bu yerda siz yangi eslatmalar yaratishingiz mumkin
						</p>
					</div>

					<CreateNotes />
				</div>
			</div>

			{lists.length < 1 ? (
				<NotFile />
			) : (
				<div className='px-4 mt-4'>
					{lists.map(item => (
						<ListsCard key={item._id} list={JSON.parse(JSON.stringify(item))} />
					))}
				</div>
			)}
		</>
	)
}

export default Page
