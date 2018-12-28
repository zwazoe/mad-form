const { MAD, MG, MadValues } = require('../index.js');

let req = {
	body: [
		{
			field: {
				variation: [ '5bb63f0be7179a6602f3e1e4', '5bb63f27e7179a6602f3e1eb', '5bb63f27e7179a6602f3e1eb' ],
				warranty: [ '5bb6400ae7179a6602f3e23c', '5bb64024e7179a6602f3e23e', '5bb64017e7179a6602f3e23d' ],
				timing: [ '5bb64059e7179a6602f3e24d', '5bb64059e7179a6602f3e24d', '5bb64059e7179a6602f3e24d' ],
				pitch: [],
				group: []
			},
			published: true,
			public: true,
			validated: true,
			_id: '5c24e8179562502560afe636',
			name: 'medium',
			attributes: [
				{
					_id: '5c24e8179562502560afe63a',
					attributes_fields: 'weight',
					attributes_values: '32'
				},
				{
					_id: '5c24e8179562502560afe639',
					attributes_fields: 'height',
					attributes_values: '68'
				},
				{
					_id: '5c24e8179562502560afe638',
					attributes_fields: 'width',
					attributes_values: '48'
				},
				{
					_id: '5c24e8179562502560afe637',
					attributes_fields: 'width',
					attributes_values: '56'
				}
			],
			owner: '5c24088735a3482c9cdc1fe0',
			creator: '5c24084c35a3482c9cdc1fdf',
			group_alias: 'shirt',
			group_description: 'this item works best for the res',
			created_at: '2018-12-27T14:56:23.564Z',
			__v: 0
		},
		{
			field: {
				variation: [ '5bb63f0be7179a6602f3e1e4', '5bb63f27e7179a6602f3e1eb', '5bb63f27e7179a6602f3e1eb' ],
				warranty: [ '5bb6400ae7179a6602f3e23c', '5bb64024e7179a6602f3e23e', '5bb64017e7179a6602f3e23d' ],
				timing: [ '5bb64059e7179a6602f3e24d', '5bb64059e7179a6602f3e24d', '5bb64059e7179a6602f3e24d' ],
				pitch: [],
				group: []
			},
			published: true,
			public: true,
			validated: true,
			_id: '5c24e8179562502560afe63b',
			name: 'large',
			title: 'large',
			attributes: [
				{
					_id: '5c24e8179562502560afe63f',
					attributes_fields: 'weight',
					attributes_values: '32'
				},
				{
					_id: '5c24e8179562502560afe63e',
					attributes_fields: 'height',
					attributes_values: '68'
				},
				{
					_id: '5c24e8179562502560afe63d',
					attributes_fields: 'width',
					attributes_values: '48'
				},
				{
					_id: '5c24e8179562502560afe63c',
					attributes_fields: 'width',
					attributes_values: '56'
				}
			],
			owner: '5c24088735a3482c9cdc1fe0',
			creator: '5c24084c35a3482c9cdc1fdf',
			group_alias: 'shoes',
			group_description: "this item works bes't for the res",
			created_at: '2018-12-27T14:56:23.568Z'
		}
	]
};

const madValues = new MadValues(req.body, [ 'attributes' ]);

// const source = JSON.stringify(madValues.getSource(this.mainSource, this.embededSource, this.addOnSource));
// const keys = JSON.stringify(madValues.getKeys());
const value = JSON.stringify(madValues.getValue());
// console.log(source);

console.log(value);
// console.log(value);
