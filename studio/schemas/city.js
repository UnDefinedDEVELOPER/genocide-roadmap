export default {
	name: 'city',
	title: 'City',
	type: 'document',
	fields: [
		{
			name: 'cityName',
			title: 'City Name',
			type: 'string'
		},
		{
			name: 'introduction',
			title: 'Introduction',
			type: 'document',
			fields: [
				{
					name: 'body',
					title: 'Body',
					type: 'richText'
				}
			]
		},
		{
			name: 'whatHappened',
			title: 'What Happened',
			type: 'document',
			fields: [
				{
					name: 'body',
					title: 'Body',
					type: 'richText'
				}
			]
		},
		{
			name: 'victims',
			title: 'Victims',
			type: 'document',
			fields: [
				{
					name: 'body',
					title: 'Body',
					type: 'richText'
				}
			]
		},
		{
			name: 'postWar',
			title: 'Post War',
			type: 'document',
			fields: [
				{
					name: 'body',
					title: 'Body',
					type: 'richText'
				}
			]
		}
	]
};
