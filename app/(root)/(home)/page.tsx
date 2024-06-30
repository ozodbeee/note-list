import { getLists } from '@/actions/list.action'
import CreateNotes from './_components/create-notes'
import ListsCard from './_components/lists-card'

async function Page() {
	const lists = await getLists()

	return (
		<>
			<div className='py-4 px-4 border-b sticky top-[10vh] w-full bg-background backdrop-blur-xl'>
				<div className='flex justify-between'>
					<div>
						<h1 className='font-SpaceGrotesk font-bold text-2xl'>
							Sizning eslatmalaringiz
						</h1>
						<p className='font-SpaceGrotesk'>
							Bu yerda siz yangi eslatmalar yaratishingiz mumkin
						</p>
					</div>

					<div className=''>
						<CreateNotes />
					</div>
				</div>
			</div>

			<div className='px-4 mt-4'>
				{lists.map(item => (
					<ListsCard key={item._id} list={JSON.parse(JSON.stringify(item))} />
				))}
			</div>
		</>
	)
}

export default Page
