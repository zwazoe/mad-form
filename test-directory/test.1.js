const { MAD, MadValues } = require('../index.js');

let req = {
	body: {
		name: 'Medium | Large | Small | XXL',

		attributes_measurements: 'LB|Inch|',
		attributes_fields: 'Weight | Height | Width | ',
		attributes_values: '32 | 68 | 48 | 56',
		field_name: 'variation| warranty| timing|content|group|',
		field_variation:
			'variation.5bb63f0be7179a6602f3e1e4| variation.5bb63f27e7179a6602f3e1eb| warranty.5bb6400ae7179a6602f3e23c|timing.5bb64059e7179a6602f3e24d| timing.5bb64059e7179a6602f3e24d|  warranty.5bb64024e7179a6602f3e23e|variation.5bb63f27e7179a6602f3e1eb| timing.5bb64059e7179a6602f3e24d| warranty.5bb64017e7179a6602f3e23d| content.5b2b6019e7179a589286065d.',
		group_alias: 'Shirt| Shoes|',
		group_description:
			'this item works best for the rest|  I am writting another description | This is the third and last description',
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
			group: false,
			mare: true
		},
		group: 'group',
		groupCompletion: true
	}
);

const payload = mad.run();

const madValues = new MadValues(
	payload,
	[ 'attributes' ],
	(addOnSource = []),
	(options = {
		skip: [ 'created_at', 'field', 'owner', 'creator', '_id' ],
		keyed: {
			key: true,
			valueAsKey: false,
			categoryAsKey: true,
			valueKey: 'values',
			prefix: 'option_',
			suffix: '_option',
			addOnKeys: {
				include: true,
				prefix: 'value__',
				categoryKey: 'types',
				spaceReplacer: '__',
				addOns: {
					creator: '00934803408',
					somone: '0408373'
				}
			}
		}
	})
);

let values = madValues.run();

console.log(JSON.stringify(payload, null, 4));
// console.log(JSON.stringify(values));
