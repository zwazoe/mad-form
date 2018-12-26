const { MAD, MG } = require('../index.js');

let req = {
	body: {
		name: 'Medium | Large|',

		attributes_measurements: 'LB|Inch|',
		attributes_fields: 'Weight | Height | Width ',
		attributes_values: '32 | 68 | 48 | 56',
		field_name: 'variation| warranty| timing|content|group|',
		field_variation:
			'variation.5bb63f0be7179a6602f3e1e4| variation.5bb63f27e7179a6602f3e1eb| warranty.5bb6400ae7179a6602f3e23c|timing.5bb64059e7179a6602f3e24d| timing.5bb64059e7179a6602f3e24d|  warranty.5bb64024e7179a6602f3e23e|variation.5bb63f27e7179a6602f3e1eb| timing.5bb64059e7179a6602f3e24d| warranty.5bb64017e7179a6602f3e23d| content.5b2b6019e7179a589286065d.',
		group_alias: 'Shirt| Shoes|',
		group_description: 'this item works best for the res|',
		public: 'true',

		published: 'true',
		owner: '5b1e87c4f9e3a6ddec3a6f1b',
		creator: '5b1e87c4f9e3a6ddec3a6f1b',
		updated_at: Date.now()
	}
};

const mad = new MAD(
	req.body, // data source
	'name', // the form name
	[ '_', '|', '.' ], // spliters: key, value, and options (opitions uses on demarel)
	[ 'attributes' ], // melel field which will get by rows.
	[ 'field' ], //// demarel fields which will mix and match it.
	{
		attache: [],
		overide: {
			owner: 'place.id',
			creator: 'profile.id'
		},
		includeKeys: {
			demare: false,
			group: true,
			mare: true
		},
		group: 'group',
		groupCompletion: true
	}
);

const madGroup = new MG(
	req.body, // data source
	'name', // the form name
	[ '_', '|', '.' ], // spliters: key, value, and options (opitions uses on demarel)
	'group'
);

const data = JSON.stringify(mad.run());

console.log(data);
