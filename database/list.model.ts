import { Schema, model, models } from 'mongoose'

const ListSchema = new Schema(
	{
		title: String,
		description: String,
		createdAt: String,
	},
	{ timestamps: true }
)

const List = models.List || model('List', ListSchema)
export default List
