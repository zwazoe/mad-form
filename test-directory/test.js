const { MAD } = require('../index.js');

let req = {
	body: {
		name: 'Medium | Large|',

		attributes_measurements: 'LB|Inch|',
		attributes_fields: 'Weight | Height | Width ',
		attributes_values: '32 | 68 | 48 | 56',
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
		demarelKeyed: true
	}
);

const data = JSON.stringify(mad.run());

console.log(data);
