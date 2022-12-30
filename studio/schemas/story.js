export default {
	name: 'story',
	title: 'Story',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'title',
			type: 'string'
		},
		{
			name: 'cityCategory',
			title: 'City Category',
			type: 'reference',
			to: [
				{
					type: 'city'
				}
			]
		},
		{
			name: 'body',
			title: 'Body',
			type: 'richText'
		}
	]
};
