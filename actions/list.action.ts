'use server'

import { IList } from '@/app.types'
import List from '@/database/list.model'
import { connectToDatabase } from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'
import { ICreateList } from './types'

export const createList = async (data: ICreateList) => {
	try {
		await connectToDatabase()
		await List.create(data)
		revalidatePath('/')
	} catch (error) {
		throw new Error('Something went wrong while creating list!')
	}
}

export const getLists = async () => {
	try {
		await connectToDatabase()
		const lists = await List.find().sort({ createdAt: -1 })
		return lists as IList[]
	} catch (error) {
		throw new Error('Something went wrong while getting lists!')
	}
}

export const deleteList = async (id: string, path: string) => {
	try {
		await connectToDatabase()
		await List.findByIdAndDelete(id)
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong while deleting list!')
	}
}
