export default {
	name: 'figure',
	type: 'object',
	title: 'Figure',
	fields: [
		{
			name: 'image',
			type: 'image'
		},
		{
			name: 'alt',
			title: 'Alternative Text',
			type: 'string'
		},
		{
			name: 'caption',
			title: 'Caption',
			type: 'string'
		}
	]
};
