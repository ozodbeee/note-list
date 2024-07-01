'use server'

import { IList } from '@/app.types'
import List from '@/database/list.model'
import User from '@/database/user.model'
import { connectToDatabase } from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'
import { ICreateList } from './types'

export const createList = async (data: ICreateList, clerkId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		await List.create({ ...data, instructor: user._id })
		revalidatePath('/')
	} catch (error) {
		throw new Error('Something went wrong while creating list!')
	}
}

export const getLists = async (clerkId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		const lists = await List.find({ instructor: user._id }).sort({
			createdAt: -1,
		})
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
