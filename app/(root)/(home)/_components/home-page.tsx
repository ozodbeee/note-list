import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Navbar from '../../_components/navbar'

function HomePage() {
	return (
		<>
			<Navbar />
			<div className='flex flex-col h-screen items-center justify-center'>
				<p className='md:text-xl bg-secondary py-2 px-5 text-primary font-SpaceGrotesk rounded-full'>
					Eslatmalaringizni osongina tartiblang
				</p>

				<h1 className='text-2xl md:text-3xl lg:text-5xl font-bold font-SpaceGrotesk mt-4'>
					Osonlik bilan eslatma yarating
				</h1>

				<p className='font-SpaceGrotesk text-[11px] md:text-[16px] text-center w-[350px] md:w-[550px] mt-2'>
					Assalomu alaykum! Bizning note list sahifamizga xush kelibsiz! Bu
					yerda siz ozingizni ish rejalaringizni tartiblashimiz mumkun. Note
					listdan foydalanish 100% bepul. Faqat ro{"'"}yxadan o{"'"}tsangiz bo
					{"'"}ldi.
				</p>

				<Link href={'/sign-in'}>
					<Button className='mt-8 font-SpaceGrotesk'>
						Bepul ro{"'"}yxatdan o{"'"}ting
					</Button>
				</Link>
			</div>
		</>
	)
}

export default HomePage
