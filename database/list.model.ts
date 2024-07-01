import { Schema, model, models } from 'mongoose'

const ListSchema = new Schema(
	{
		title: String,
		description: String,
		createdAt: String,
		instructor: { type: Schema.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true }
)

const List = models.List || model('List', ListSchema)
export default List
